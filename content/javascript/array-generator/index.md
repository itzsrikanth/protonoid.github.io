---
title: Array Generator - Javascript
---
Array Generator

```javascript
const gen = N => [...(function*(){let i=0;while(i<N)yield i++})()]
performance.mark('test1');
gen(100000);
performance.measure('test1');
```

The duration for above [code](https://stackoverflow.com/a/36828957/5305151) is observed to be 3168.09.


```javascript
var foo = [];
performance.mark('test2')
for (var i = 1; i <= 100000; i++) {
   foo.push(i);
}
performance.measure('test2');
```
The duration for above [code](https://stackoverflow.com/q/3746725/5305151) is observed to be 2420.01.

```javascript
performance.mark('test3');
for(foo=[x=100000]; x; foo[x-1]=x--);
performance.measure('test3');
```
The duration for above [code](https://stackoverflow.com/a/36324319/5305151) is observed to be 1888.52.

```javascript
performance.mark('test4');
Array.from({length: 100000}, (v, k) => k+1); 
performance.measure('test4');
```
The duration for above [code](https://stackoverflow.com/a/38213213/5305151) is observed to be 2254.72.

```javascript
performance.mark('test5');
[...Array(100000)].map((_, i) => i + 1)
performance.measure('test5');
```
The duration for above [code](https://stackoverflow.com/a/40772491/5305151) is observed to be 4273.46.

```javascript
performance.mark('test6');
for(var i,a=[i=0];i<100000;a[i++]=i);
performance.measure('test6');
```
The duration for above [code](https://stackoverflow.com/a/41293227/5305151) is observed to be 17016.45.

```javascript
performance.mark('test7');
var arr = Array(100000).fill(0);
performance.measure('test7');
```
The duration for above code is 3098.02