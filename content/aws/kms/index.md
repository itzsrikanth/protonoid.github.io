---
title: KMS Encryption and Decryption
description: Encrypt and decrypt secure text, passwords and keys using AWS KMS service using CLI
---

# Encrypt and Decrypt Keys using AWS KMS

## Encryption
For this we need to create a "Customer Managed Key" using either console or CLI, or any other programmatic way. Once we do that, we obtain a `key-id` to use for encryption. We do not require `key-id` for decryption. The reason is that, the encrypted hash will be self sufficiently having all the required data for decryption. We can set alias name and description for the keys along with tags for easy identification of the key's purpose.

```bash
aws kms encrypt \
--key-id XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX \
--plaintext "secret text for encryption" \
--output text \
--query CiphertextBlob
```

The drawback with above method is, if someone or admin checks the history, it will be visible as clear text and in many organisation it will be a clear violation of security policies. For that, we can store the password in a text file and call that file here. Say,

```bash
aws kms encrypt \
--key-id XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX \
--plaintext fileb://secretfile \
--output text \
--query CiphertextBlob
```

When we do this, the resulting hash will be `base64` encoded. If we decode it, it will result in a binary value which we cannot store in yaml file. Or else, we can have the binary string written to a separate file and reference that file in our yaml files.
For decoding and storing in a file,

```bash
aws kms encrypt \
--key-id XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX \
--plaintext fileb://secretfile \
--output text \
--query CiphertextBlob | base64 --decode > binaryFileName
```

## Decryption

For decryption,

```bash
aws kms decrypt \
--ciphertext-blob fileb://binaryFileName
--output text \
--query Plaintext
```

**Note:- Again, the resulting text will be base64 encoded**

If you have an encrypted base64 text string to obtain back the original secret key, you can do:
```bash
aws kms decrypt \
--ciphertext-blob fileb://<(echo "encryptedBase64EncodedString" | base64 --decode)
--output text \
--query Plaintext | base64 --decode
```
