---
title: Github actions introduction
description: Conceptual introduction to CI/CD using Github Actions
---

# Introduction

Newest and powerful entrant in the field of CI/CD. It is built natively as part of GitHub itself, so the CI/CD pipeline, test and build timing reduces drastically. Many features are introduced as part of Actions. Some of them are as follows:
- secret "vault" for storing sensitive keys and passwords
- workflow trigger filter based on events, branch name, file path
- precise event hooks like push, pull_request, release, public etc
- multiple OS like Ubuntu, Mac and Windows
- parallel execution of jobs
- live logs

## Global variables
- `$GITHUB_WORKSPACE` - checkout happens to this variable
- `GITHUB_REPOSITORY`
- `GITHUB_EVENT_NAME`

## Theory
The workflow can be triggered based on number of events. If `push` and `pull_request` specifically, we can specify branch/tag name(s).