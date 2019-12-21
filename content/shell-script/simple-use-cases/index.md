---
title: Simple Use Cases - Shell Script
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
