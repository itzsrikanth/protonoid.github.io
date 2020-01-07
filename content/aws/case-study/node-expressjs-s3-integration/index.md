---
title: Node ExpressJS and S3 Integration
description: Basic code snippet for pushing data from a ExpressJS POST call to AWS S3 bucket
---

```javascript
const express = require('express');
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: 'xxxxxxxxxx',
    secretAccessKey: 'XXXXXXXXXXXXXXXXX',
    region: 'us-east-1'
});
const s3 = new AWS.S3();
const PORT = parseInt(process.env.PORT, 10) || 3000;
const app = express();
app.use(express.json());

app.get('/list-objects', (req, res) => {
    s3.listObjects({
        Bucket: 'bucket-name'
    }, (err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(
                JSON.stringify(data, null, 4)
            );
        }
    });
});

app.post('/push-object', (req, res) => {
    const fileStamp = Date.now().toString();
    const data = JSON.stringify(req.body);
    if (data) {
        s3.upload({
            Bucket: 'bucket-name',
            Key: fileStamp,
            Body: 
        }, (err, data) => {
            if (err) {
                res.status(err.statusCode).send(err);
            } else {
                res.status(200).send('Ok');
            }
        });
    } else {
        res.status(400).send('Empty body');
    }
});

app.listen(PORT, () => console.log(`Started at Port: ${PORT}`));

```