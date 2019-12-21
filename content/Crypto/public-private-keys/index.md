---
title: Public Private keys - Cryptography / Security
---
# Public Private keys

We need to generate public and private key to ssh into remote machines and for authentication/authorization

```
ssh-keygen
```

When automating servers, we need to add IP address of remote servers in known hosts

```
ssh-keyscan github.com >> ~/.ssh/known_hosts
```

When we have got multiple github accounts, we can use one pub in for one account only. We need to generate another pair of pub-private key pair to add to another github account. We need to add the newly generated file name/location

```
ssh-add /path/to/new/rsa/file
```

When we want to test from CLI that which github username is active:
```
ssh -T git@github.com
```

When we want to specifically muse a particular RSA key,
```
ssh -i /file/to/private_key
```