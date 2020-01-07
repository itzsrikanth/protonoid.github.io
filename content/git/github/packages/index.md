---
title: Github Packages
---

# Introduction

## Docker
The Image Registry URL is `docker.pkg.github.com`.

#### Download image from private repo
##### Related issues:
- "Error response from daemon: unauthorized: Your request could not be authenticated by the GitHub Packages service. Please ensure your access token is valid and has the appropriate scopes configured."
- "Error response from daemon: unauthorized: Resource protected by organization SAML enforcement. You must grant your personal token access to this organization."
- "Failed to pull image: rpc error: code = Unknown desc = Error response from daemon: pull access denied for repository does not exist or may require 'docker login'"

We need to have a "Personal Access Token" generated for our account from `https://github.com/settings/tokens`. The will be our password while logging in CLI for Github Packages.
```bash
docker login -u <username> docker.pkg.github.com
```

Once logged in, you can check `~/.docker/config.json` for confirmation. It will be like:
```json
{
	"auths": {
		"docker.pkg.github.com": {
			"auth": "xxxxxxxxxxxxxxxxxxxxxx="
		}
	},
	"HttpHeaders": {
		"User-Agent": "Docker-Client/18.09.9 (linux)"
	}
}
```
