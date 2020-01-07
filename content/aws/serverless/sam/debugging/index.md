---
title: Debugging SAM lambda - AWS
---
# AWS SAM Lambda local debugging

```bash
# General Syntax
# sam local invoke <FunctionName> -e <eventFile.json> -d 5858
# Example:
sam local invoke HelloWorldFunction -e event.json -d 5858
```

We will get the URL to attach the debugger

[SAM local invoke debugging - Image on Pasteboard](https://pasteboard.co/IyQHOV3.png)

Our function will be available in the docker container under `/var/task/index.js`. The SDK inbuilt function will be available in `/var/runtime` directory. 

In debugger, until we require/import the files, we will not able to see them listed. for that, we need to go to `/var/runtime/UserFunction.js` and place debugger in `_tryRequire` function. Once it resolves path and loads the file using `_canLoadAsFile`, we can view the files listed in the debugger to place the breakpoints.

Happy debugging..!