---
title: Tips working on Mongo Client CLI
---
## Prettify CLI output
### Temporary
```
db.collection.find().pretty()
```
### Permananent
```
DBQuery.prototype._prettyShell = true
```
Ref: https://stackoverflow.com/questions/9146123/pretty-print-in-mongodb-shell-as-default


## DB Admin commands
```
# To restore from dump into different db and collection name
mongorestore -v --host localhost:27017 -d "database_name" -c "collection_name" --dir /path/to/dump/data.bson  --objcheck
```