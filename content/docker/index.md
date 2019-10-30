---
title: Docker Introduction
---
# Docker

### Network

### Network namespace
- multiple instances can be run in a `network namespace`
- The containers in a namespace or in separate namespace can be attached to one or more network(s)
- Difference between having two containers in same network and network namespace is that, in the former the containers can freely communicate over all ports in network whereas in latter, they communicate on all ports using localhost itself 

### Volumes
- named declarations can be done like
  `--volume <vol_name>:/path/to/mount`
- named volumes will be created when not exists, or else reused everytime
- When being used in Mac/Windows, docker runs on VM. So, we cannot view the files directly. To view the filesystem, use:
```bash
docker run --rm -it -v /:/vm-root alpine:edge ls -l /vm-root
```
**Ref**: https://forums.docker.com/t/host-path-of-volume/12277/2

## To-Dos:
- Distroless implementation [distroless/Dockerfile at master · GoogleContainerTools/distroless · GitHub](https://github.com/GoogleContainerTools/distroless/blob/master/examples/nodejs/Dockerfile)