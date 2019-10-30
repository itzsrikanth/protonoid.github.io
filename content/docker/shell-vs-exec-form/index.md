---
title: Shell vs Exec Form
---
# Shell vs Exec Form
`SHELL` form uses 
```bash
/bin/bash -c "command"
```
Here, the command will be child of `/bin/bash`. When we use `docker exec`, it will be hard to send signal to command because it will be sent to `/bin/bash` instead of getting sent to the command itself. `Exec` form will be executed without a shell, directly it will be run.
When both `ENTRYPOINT` and `CMD` are used, `CMD` strings are appended to `ENTRYPOINT`. So, the argument which we supposed to be easily overridden are specified in `CMD`, other parent or less frequently changing ones by `ENTRYPOINT`. During this combination, always we use `EXEC` form.