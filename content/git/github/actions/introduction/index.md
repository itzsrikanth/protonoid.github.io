---
title: Github actions introduction
---

# Introduction

## Global variables
- `$GITHUB_WORKSPACE` - checkout happens to this variable
- `GITHUB_REPOSITORY`
- `GITHUB_EVENT_NAME`

## Theory
The workflow can be triggered based on number of events. If `push` and `pull_request` specifically, we can specify branch/tag name(s).