---
title: EKS Introduction
---

## Gotchas
- When creating a role for associating with a EKS cluster using console, Instance profile will not be created
> The console does not create an instance profile for a role that is not associated with Amazon EC2.
*Ref:- https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html*

