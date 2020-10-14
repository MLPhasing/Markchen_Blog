---
layout: post
tags: JavaScript
title: Javascript Notes Week 5
---

## Functions of  `Array`
### Function 0: `Array.length`

```javascript
> arr = {1, 2, 3};
> arr.length;
3
```
### Function 1: `Array.sort()`

```javascript
> arr = {1, 2, 3};
> arr.sort((a, b) => a-b);
[1, 2, 3, 4, 5, 6]
> arr.sort((a, b) <= b-a);
[6, 5, 4, 3, 2, 1]
```

We can designate the way that `sort` function work. When JavaScript is sorting, it will use the **comparaFn** function provided in the `()`.

#### Compare Function in JavaScript

Usually, given `a` and `b`, the compareFn will return whether `a > b`, `a < b` or `a=b`.
By convention, if `CompareFn(a, b)` returns 1, `a > b`. If it returns 0, `a = b`. If it returns -1, `a < b`.

To make an array being sorted in a reversed order, we can declare such a comparator:
```javascript
>   function comparator(a, b){
        return b - a;
    }
>   arr = [1, 2, 3, 4, 7, 6];
>   arr.sort(comparator(a, b))
[7, 6, 4, 3, 2, 1]
```

Also, we can use the **Anonymous Function** in the sort function. The **Anonymous Function** in JavaScript is also called **Arrow Function** since it has an arrow sign `=>` in it.

When the program is being executed, the anonymous function will **Not be loaded into Memory until it is used in the program**. This will usually lead to a better performance comparing to conventioal functions declared with `function` keyword.

```javascript
> arr = [1, 3, 2, 4, 5];
> arr.sort((a, b) => b - a);
[5, 4, 3, 2, 1]
```

### Function 2: `Array.find()`
In the `find()` function, ... (not finished)


### Function 3: `Array.filter()`
In the `filter()` function, we need to provide a `filterFn`. The filter function will return a boolean value (or other value, since in Javascript, every object has a corresponding boolean property).
The `Array.filter()` will return a new array, composts of all the elements such that `filterFn(element) == True` in it.
