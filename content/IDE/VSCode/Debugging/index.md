---
title: VSCode Debugging
---
VS Code Debugging

## `launch.json` configurations
### `cwd`
When we refer any configure files, it is searched in the `workspaceRoot` unless we set `cwd`. [Reference]()

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "programName",
            "cwd": "${workspaceRoot}/packages",
            "program": "${workspaceFolder}/src/index.js",
            "env": {
                "NODE_CONFIG_ENV": "dev"
            },
            "outFiles": ["${cwd}/dist/**/*.js"],
            "sourceMaps": true,
            "smartStep": true  
        }
    ]
}
```

### args
We can specify array of CLI arguments as an array of string. The arguments can include command flags as well.

## Different debugging scenarios
### Setting Environment variables
```json
{
    "type": "node",
    "request": "launch",
    "name": "module1",
    "restart": true,
    "console": "integratedTerminal",
    "cwd": "${workspaceRoot}/src",
    "program": "${workspaceFolder}/src/index.js",
    "env": {
        "NODE_CONFIG_ENV": "dev"
    }
}
```
Here, we are using npm package called `config`, which expect the environment variable `NODE_CONFIG_ENV` to be set in order to load, say `dev.json`, in this example

### Executing process monitoring tools like pm2 / nodemon
```json
{
    "type": "node",
    "request": "launch",
    "name": "module1",
    "runtimeExecutable": "nodemon",
    "restart": true,
    "console": "integratedTerminal",
    "cwd": "${workspaceRoot}/src",
    "program": "${workspaceFolder}/src/index.js",
}
```
Here, the `runtimeExecutable` is used to launch the instance of the node script. Similarly other executables can be used for the same.


### Multi-module debugging
When we have setup like client-server or multi-repo managed by lerna, we can set the debug configurations for node apps as given below:

```json
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "module1",
            "restart": true,
            "console": "integratedTerminal",
            "cwd": "${workspaceRoot}/packages/abc",
            "program": "${workspaceFolder}/packages/abc/src/index.js",
            "sourceMaps": true
        }, 
        {
            "type": "node",
            "request": "launch",
            "name": "module2",
            "cwd": "${workspaceRoot}/packages/def",
            "program": "${workspaceFolder}/packages/def/src/index.js",
            "args": ["arg1"],
            "sourceMaps": true
        }
    ]
```
Here, we are mentioning the `cwd` (current working directory) of each of the repo in the workspace.

In the scenario where we want to launch more than one module's debugging session, the `launch.json` can be configured as follows:

```json
"compounds": [
        {
            "name": "abc/def",
            "configurations": [
                "module1",
                "module2"
            ]
        }
    ]
```

But in the above scenario, where one module depends on the launch of the next, it is desirable to have some delay which will give sufficient time to launch the former. This can be done by using `sleep` command while defining `tasks`.

Both the `tasks.json` and `launch.json` is attached below for reference:

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Sleep",
            "type": "shell",
            "command": "sleep 3",
            "windows": {
                "command": "ping 127.0.0.1 -n 6 > nul"
            },
            "group": "none",
            "presentation": {
                "reveal": "silent",
                "panel": "new"
            }
        }
    ]
}
```

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "module3",
            "cwd": "${workspaceRoot}/packages/module3",
            "program": "${workspaceFolder}/packages/module3/src/index.js",
            "env": {
                "NODE_CONFIG_ENV": "dev"
            },
            "sourceMaps": true
        },
        {
            "type": "node",
            "request": "launch",
            "name": "module1",
            "runtimeExecutable": "nodemon",
            "restart": true,
            "console": "integratedTerminal",
            "cwd": "${workspaceRoot}/packages/module1",
            "program": "${workspaceFolder}/packages/module1/src/index.js",
            "env": {
                "NODE_CONFIG_ENV": "dev"
            },
            "sourceMaps": true
        }, 
        {
            "type": "node",
            "request": "launch",
            "name": "module2",
            "cwd": "${workspaceRoot}/packages/module2",
            "program": "${workspaceFolder}/packages/module2/src/index.js",
            "env": {
                "NODE_CONFIG_ENV": "dev"
            },
            "preLaunchTask": "Sleep",
            "sourceMaps": true
        }
    ],
    "compounds": [
        {
            "name": "module1/module2",
            "configurations": [
                "module1",
                "module2"
            ]
        }
    ]
}
```