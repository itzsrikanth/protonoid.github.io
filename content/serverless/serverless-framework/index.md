---
title: AWS Serverless Framework
description: Using Serverless Framework for creating a Serverless microservices architecture using Lambda, DynamoDB, S3 Buckets, API Gateways and IAM Access.
---


# Serverless Framework
![Serverless comparisons](https://theburningmonk.com/wp-content/uploads/2019/05/img_5cddfd8fe678a.png)

## Introduction
Serverless framework brings in multi cloud serverless capability in the form of automated descriptive programming. Here, in AWS, it will be leveraging the CloudFormation to build on top of it. It has got many built in templates and plugins ecosystem to choose from.

## Access required
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "iam:PassRole",
                "iam:ListAttachedRolePolicies",
                "iam:CreateRole",
                "iam:PutRolePolicy",
                "iam:AttachRolePolicy",
                "iam:GetRole",
                "s3:*",
                "apigateway:*",
                "logs:*",
                "lambda:*",
                "cloudformation:*"
            ],
            "Resource": "*"
        }
    ]
}
```

## Troubleshooting
- CustomDashresourceDashapigwDashcwDashroleLambdaFunction - The role defined for the function cannot be assumed by Lambda
```
An error occurred: CustomDashresourceDashapigwDashcwDashroleLambdaFunction - The role defined for the function cannot be assumed by Lambda. (Service: AWSLambdaInternal; Status Code: 400; Error Code: InvalidParameterValueException; Request ID: XXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX).
```
Need to add `lambda.amazonaws.com` to the `cfnRole`
Ref: ["The role defined for the function cannot be assumed by Lambda" error after upgrading to 1.55.0 · Issue #6876 · serverless/serverless · GitHub](https://github.com/serverless/serverless/issues/6876)

## Resources
### Documentation
- [Serverless Framework - AWS Lambda Guide - Serverless.yml Reference](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/)
