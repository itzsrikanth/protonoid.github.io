---
title: API Gateway
---
# API Gateway

## CloudFormation

### Integration Request
Format for specifying `uri` for:
- Lambda function
    ```text
    arn:aws:apigateway:{api-region}:lambda:path//2015-03-31/functions/arn:aws:lambda:{lambda-region}:{account-id}:function:{lambda-function-name}/invocations
    ```
- AWS service Generic
    ```text
    arn:aws:apigateway:{api-region}:{aws-service}:action/{action-name}
    ```
- S3 Buckets
    ```text
    arn:aws:apigateway:{api-region}:s3:path/{s3-bucket-name}
    ```

*source: [Api Gateway Integration Request - AWS Documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/integration-request-basic-setup.html)*


## References:
- [A Detailed Overview of AWS API Gateway](https://www.alexdebrie.com/posts/api-gateway-elements/)
- [Creating an Amazon API Gateway with a Mock Integration using CloudFormation](https://nickolaskraus.org/articles/creating-an-amazon-api-gateway-with-a-mock-integration-using-cloudformation/)

### URLs to have in browser tabs while creating CloudFormation template for API Gateway
- [Amazon API Gateway API Request and Response Data Mapping Reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html)
- [API Gateway Mapping Template and Access Logging Variable Reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#input-variable-reference)
- 
- [API Gateway Extensions to OpenAPI](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html)
  
### Examples
- [Amazon API Gateway Extension to OpenAPI - NovaOrdis Knowledge Base](https://kb.novaordis.com/index.php/Amazon_API_Gateway_Extension_to_OpenAPI)
- [AWS API Gateway Service Integrations](https://binx.io/blog/2018/10/27/aws-api-gateway-service-integrations/)
- [Connect AWS API Gateway directly to SNS using a service integration](https://www.alexdebrie.com/posts/aws-api-gateway-service-proxy/)
- [CloudFormation example for an API Gateway endpoint calling a Lambda function using proxy integration. - bl.ocks.org](https://bl.ocks.org/magnetikonline/c314952045eee8e8375b82bc7ec68e88)
- [api-gateway-lambda-example/swagger.yml at master · r7kamura/api-gateway-lambda-example · GitHub](https://github.com/r7kamura/api-gateway-lambda-example/blob/master/swagger.yml)
- [Integrate API Gateway with Kinesis Firehose using CloudFormation](https://apimeister.com/2017/08/24/integrate-api-gateway-with-kinesis-firehose-using-cloudformation.html)
