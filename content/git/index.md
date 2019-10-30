---
title: Git Introduction
---
# Git

## Import commits from other repo

To import commits, we can add the other repo as an origin in our current repo
```sh
git remote add <origin_name> git@github.com:username/other_reponame.git
```

Now, we can either create new branch from newly added origin's any branch or rebase any of our existing branch

Then, we can even delete that origin
```sh
git remote rm <origin_name>
```
