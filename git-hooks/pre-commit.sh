#!/bin/bash

URL=https://$(cat CNAME)
TMP=$(mktemp /tmp/XXXXXXXX)
(git diff --name-status --cached |
    grep -E '^\w\s+content' |
    awk -v URL="$URL" '{gsub("content",URL,$2); print}' |
    sed 's/index.md$//') > $TMP
node sitemapGenerator.js sitemap.xml $TMP
git add sitemap.xml
