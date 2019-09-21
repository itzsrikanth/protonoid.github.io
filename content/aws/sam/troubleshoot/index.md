# Troubleshoot

## SAM unable to connect endpoint URL
https://github.com/awslabs/aws-sam-cli/issues/102#issuecomment-326177151

```bash
ifconfig lo0 alias 172.16.123.1
```

```javascript
AWS.config.update({
    endpoint: "http://172.16.123.1:8000"
});
```

```bash
ifconfig lo0 -alias 172.16.123.1
```
