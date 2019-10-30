---
title: Entrypoint vs CMD
---

# Entrypoint vs CMD
For a image to be runnable, it should have `ENTRYPOINT` or `CMD`. Without that, the image will result in an error. They are default executable which user can override. `CMD` can be overridden directly as below:
```bash
docker run --name ubuntu_bash -it ubuntu:latest bash
```
Whereas, `ENTRYPOINT` can be overridden as:
```bash
docker run --entrypoint <command>
```
Due to ease of override, `CMD` is preferred. In scenarios where we do not expect the user to override, we can opt for `ENTRYPOINT`.