---
title: Lerna package - Introduction
---
# Lerna
## Commands
### [List](https://www.npmjs.com/package/@lerna/list)


## Cookbooks
#### Add local package to other package
```bash
npm install ../package-name -S
```
This will add `"package-name": "file:../package-name"` in `dependencies`

#### Trigger npm install in all packages
```bash
npx lerna bootstrap
```
