---
title: ELK with filebeats
---
# ELK with filebeats
## Introduction

## Need for beats

## Installation

- install filebeat as mentioned in procedure
- to run:
  `filebeat -e -c ./filebeat.yml -d "*"`
  -d specifies debug level
  -e report error on `STDERR`
  -c specify config file (default: filebeat.yml)
- Set `output.console` configs to verify/debug

### X-Pack

## Logstash
### Mac
- install location: /usr/local/Cellar/logstash/7.3.0
- config: /usr/local/Cellar/logstash/7.3.0/libexec/config -> /usr/local/etc/logstash
within the config, we can edit `logstash.yml`

## Elasticsearch
### Theory
- Index -> Database
- Type -> TableName
- Document -> Rows/Records
- Fields  -> columns
### API
- Document
  - Single
    - Index: Adds or updates typed JSON doc in specific index, making it searchable
```
POST <index-name>/<type-name>/<id>
{
  "key1": "value1"
}
```
    - Get
```
GET /<index-name>/<type-name>/_search?size=20
```
    - Delete
```
DELETE /<index-name>/<type-name>/<id>
```
    - Update
```
POST <index-name>/<type-name>/<id>/update
{
  "script": {
    "source": "ctx._source.Age=params.val",
    "lang": "painless",
    "params": {
      "val": {
        "Age": 32,
        "Gender": "Female"
      }
    }
  }
}
```
  - Multi
    - Get
```
GET /_mget
{
  "abc": [
    {
      "_index": "index-name",
      "_type": "type-name"
    },
    {
      "_index": "",
      "_type": ""
    }
  ]
}
```
    - Bulk
    - Delete by query
```
POST /<index-name>/_delete_by_query
{
  "query": {
    "match": {
      "name": "xyz"
    }
  }
}
```
    - Update by query
    - Reindex
- Search
- Indices
- Cat
- Cluster
### Mac
- Data storage location: `~/logs/logstash/elasticsearch-7.3.1/data/nodes/0`
- Go to `http://localhost:9200/_cat/indices` to see the list of indexes created.
- when indices status is `yellow` in development machine, setting `index.number_of_replicas` to `0` will resolve the issue. It will be available in kibana UI -> management menu -> elasticsearch -> index management -> edit settings

## Filebeat
### Mac
- while using filebeat with any module, we need to enable it. for that, the following config setting needs to be done:
```
filebeat.config.modules:
  enabled: true
  path: ${path.config}/modules.d/*.yml
```
followed by
```
./filebeat modules enable logstash
```

## Analysis
- Query
- Mapping parameter
- Index setting

### Analyzer
- It tokenises the text i.e. it splits them into tokens using tokeniser
- Then we have n number of token filters to filter, say, 
	- stop words like ‘a’, ‘the’ etc
	- uppercase to lowercase
- api
```
POST <index-name>/_analyze
```
- types
	- standard
	- whitespace
	- simple
	- keyword
	- stop: stop word, stopword_path
	- pattern: stopword, stopword_path, pattern, lowercase
	- custom: tokeniser, char_filter, filter

### Tokeniser
- word
	- standard
	- lowercase
	- whitespace
- partial
	- ngram
	- edge_ngram
- structured
	- keyword
	- pattern
	- simple_pattern
