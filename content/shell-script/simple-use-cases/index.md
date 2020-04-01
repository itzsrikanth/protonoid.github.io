---
title: Simple Use Cases - Shell Script
description: Some simple use cases to have an exposure on its applications
---
# Shell Script Simple Use Cases
## To convert nunjuck template without space

```bash
#!/bin/bash

find . -name index.html | while read line; do
	perl -pi -e 's/{(%|#)(?=[^-])/{\1-/g' $line
	perl -pi -e 's/(?<=[^-])(%|#)}/-\1}/g' $line
done
```

## cURL to calculate latency

**Source: [How do I measure request and response times at once using cURL? - Stack Overflow](https://stackoverflow.com/a/22625150/5305151)**
