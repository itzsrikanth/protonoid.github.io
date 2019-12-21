---
title: Replace Git GUI with CLI
---

```bash

# get all changes list
git fetch --all

# get a branch to work on
git checkout -b <branch_name> origin/<remote_branch_name>

# add files for staging
git add *

# commit the files
git commit -m "message"

# push to remote repo
git push origin <remote_branch_name>

# set a local branch to track the remote one
git branch -u origin/<remote_branch_name>
# --set-upstream-to
# --track

# list only untracked files
git ls-files --exclude-standard --others

# to see local branch tracks which remote branch
git branch -vv

# rebase with a particular remote branch and force push to another
git rebase origin/remote_branch_1
git push -f origin remote_branch_2

## Commit processing
# to get last commit hash
git log -n 1 --format="%H"
git log origin/master -n 1 --format="%H"

# Unstage all files
git reset HEAD -- .

# Discard all changes
git checkout -- .

# Delete untracked files
git clean -fd
```
