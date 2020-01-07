---
title: AWS SAM serverless
---

# AWS SAM serverless

## Introduction

## Steps

```bash
sam init
```

## Troubleshoot

- 403 - "message forbidden"

```json
{ "message": "forbidden" }
```

The is a good probability that when API Gateway Endpoints are created, the path we hit should have "stage" included.

## Extra miles

- When `sam deploy` fails, it is pushed to `ROLLBACK_COMPLETE` state. We need to delete it and proceed with re-deployment.
- We need to package SAM template before we deploy, else it will not detect changes to create `changeSets`.


## References

### Examples

- [serverless-application-model/template.yaml at master · awslabs/serverless-application-model · GitHub](https://github.com/awslabs/serverless-application-model/blob/master/examples/2016-10-31/api_swagger_cors/template.yaml)