---
title: Performance Benchmark - Javascript
---

# Javascript performance benchmarks
- Superior performance of `for` loop over `while` and prefix increment over postfix increment.
Ref: https://jsperf.com/for-loop-research
Note: Benchmark not 
The following syntax performance seems to be consistent in modern v8 (chrome/nodejs), (excluding ES6 syntax):
```
for (var i=0; i < arr.length; ++i) {
  worker();
}
```


- String, Number === is generally performant
[String compare VS number compare · jsPerf](https://jsperf.com/string-compare-vs-number-compare/2)

- string vs buffer comparison
[compare string vs buffer · jsPerf](https://jsperf.com/compare-string-vs-buffer)

- [Adding to a Set vs Pushing to an Array · jsPerf](https://jsperf.com/adding-to-a-set-vs-pushing-to-an-array)

##### array category finding if exists

- [array-time-space-complexity-comparison · jsPerf](https://jsperf.com/array-time-space-complexity-comparison/1)
- [find-if-array-element-exists-and-category-if-yes · jsPerf](https://jsperf.com/find-if-array-element-exists-and-category-if-yes/1)

##### try-catch vs code error check (even for very nested js object)