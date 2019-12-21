---
title: New account best practices
---

## Cloudformation
- Assign a service role to the stack for creating the resources rather than directly using the permissions of a console/CLI user.
- Security posture of VPC can be improved by configuring CFN to use an interface VPC endpoint. 
    Ref:- [Setting Up VPC Endpoints for AWS CloudFormation - AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-vpce-bucketnames.html)
- On empty/new AWS account, we need to create the following before proceeding to launch a CFN stack:
    - S3 bucket to store the CFN stack template
    - service role for CFN

### Resouces required
- AWS::EC2::SecurityGroup
- NACL
- AWS::EC2::VPC
- Subnets
- Internet gateway