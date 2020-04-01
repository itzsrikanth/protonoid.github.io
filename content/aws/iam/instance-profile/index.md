---
title: IAM instance profile
description: Role of Instance profile in EC2 application access management and IAM Role containment
---

# Introduction

- Using the console, when we create IAM Role, an instance profile is automatically created with same name as that of the role.
- Relation from instance profile to IAM role is one to one but the reverse is one to many i.e. only one role can be added to an instance profile but same role can be part of many instance profiles.
- From instance metadata, security credentials can be retrieved from the path `iam/security-credentials/<role_name>`. So the application will get access to all the resources and actions allowed for the role.
- According to AWS Documentation, instance profile is a container for IAM role to pass role information from AWS to EC2 after boot because the applications within EC2 machines run within a VM abstraction / enclosure.

## Temporary Security Credentials
The temporary credentials can be obtained:
  - for AWS CLI, we can use roles for EC2
  - or for SDKs, use AWS STS API - [AWS Identity & Access Management - Amazon Web Services](https://sts.amazonaws.com)

### Curl
Using curl, if we hit `http://169.254.169.254/latest/meta-data/iam/security-credentials/<role_name>`, we will obtain a JSON with following structure:

```json
{
  "Code" : "Success",
  "LastUpdated" : "2020-01-02T10:31:04Z",
  "Type" : "AWS-HMAC",
  "AccessKeyId" : "XXXXXXXXXXXXXXXXXX",
  "SecretAccessKey" : "xxxxxxxxxxxxxxxxxxxxxxxxx",
  "Token" : "xxxxxxxxxxxxxxxxxxxxxxxxxx==",
  "Expiration" : "2020-01-02T16:35:14Z"
}
```

using the above values we can set the following global variables:
```bash
export AWS_ACCESS_KEY_ID="XXXXXXXXXXXXXXXXXX"
export AWS_SECRET_ACCESS_KEY="xxxxxxxxxxxxxxxxxxxxxxxxx"
export AWS_SESSION_TOKEN="xxxxxxxxxxxxxxxxxxxxxxxxxx=="
```
Now, we are ready use the AWS CLI or SDK.
