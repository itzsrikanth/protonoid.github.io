---
title: Access services like mongodb on host inside kubernetes pods
---

# Introduction
```bash
ssh -i $(minikube ssh-key) docker@$(minikube ip) -R 27000:localhost:27017
```

Now if we want to access port `27000` inside a pod, we can do it by getting IP address of minikube and connecting to that port from inside the pod.
```bash
mongo 172.12.0.1:27000
``

## References
- [Proxying services into minikube - Tarka Labs Blog - Medium](https://medium.com/tarkalabs/proxying-services-into-minikube-8355db0065fd)