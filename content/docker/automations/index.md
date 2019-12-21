---
title: Docker One-liner automations
---
```
docker images | while read img; do
    docker image rm $(grep -E '^<none>' | awk '{print $3}');
done
```