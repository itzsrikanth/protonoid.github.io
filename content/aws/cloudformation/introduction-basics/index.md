---
title: Basics of AWS Cloudformation
---
# Introduction

- `Resources` is mandatory
- Each resource in `Resources` is given a logical name which can be referenced in other parts of the template using `Fn::Ref` of `!Ref`.
- `Resources` declaration requires `Properties` attribute to specify the resource details.
- When AWS CloudFormation creates the resource, it generates a physical name that is based on the combination of the logical name, the stack name, and a unique ID.
- Pseudo parameters are resolved by AWS CloudFormation when you create the stack.
- By default, the cfn-hup daemon runs every 15 minutes, so it may take up to 15 minutes for the application to change once the stack has been updated.