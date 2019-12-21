---
title: DynamoDB Introduction - AWS
---
# DynamoDB

## Theory - behind the time
- Strong consistency model - RDBMS, bcz one change in table reflects everywhere.
- To achieve speed geographically, user needs to write consistently to all DBs in world -> slow.
- At large scale, data were denormalized for reducing join cost. Only 
  - 10% of queries are join. 
  - 70% are on primary key.
  - 20% operate on single returned value.
- Consistency is important for financial sectors. But speed and availability is more important than consistency in other sectors, which is gained by compromising the latter -> eventual consistency model.
- Consistent Hashing to spread rows across nodes for infinite scaling.

## Expression
- Conditional - conditional manipulation of item
- Projection
- Update
- Key condition - query table with composite key and limit selected item
- filter - reduce resultset

### Options
- `condition-expression`
- `expression-attribute-names`
- `expression-attribute-values`
- `key`
- `update-expression`

#### `condition-expression` function list
- attribute_exists
- attribute_not_exists
- attribute_type
- begins_with
- contains
- size

HASH key supports only equal comparison operations

#### RANGE key operations
These expressions are valid only on RANGE and secondary indexes, not on HASH keys
- BETWEEN AND
- relational operators
- BEGINS_WITH

#### `update-expression` clauses
- `SET` - add or modify attr
- `REMOVE` - remove attr
- `ADD` - increment/decrement number/set
- `DELETE` - remove item from set

#### Reason for using `expression-attribute-names`
- [Reserved Words in DynamoDB - Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html)
- contains dot - to access nested items
- name begins with number

## Multi-item actions
- cannot use the UpdateItem API call with a BatchWriteItem request
- cannot specify conditions for your Put and Delete operations 
- `key-condition-expression`
- `select` -> `--select COUNT` to return just no of elements
- parallel scan on `segments`

## Secondary index
- sparse index (item with missing attribute dropped in indexing)
### LSI
- only on composite key
- only during creation time
- can choose strong vs eventual consistency
### GSI
- separate throughtput
- eventual consistency
- both simple/complex schema

### References
- [https://www.youtube.com/watch?v=HaEPXoXVf2k](https://t.co/OwhN4xzkSV)
- [Amazon DynamoDB research paper](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf)
- [A Decade of Dynamo: Powering the next wave of high-performance, internet-scale applications - All Things Distributed](https://www.allthingsdistributed.com/2017/10/a-decade-of-dynamo.html)
- [Consistent hashing - Wikipedia](https://en.wikipedia.org/wiki/Consistent_hashing)