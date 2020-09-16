# JavaScript Notes Week 2

---

## if, else if, and else in JS

```javascript
if (condition_1){
	...
}
else if (condition_2){
    ...
}
else{
    ...
}
```

## Array

We can put anything as the index of array. Since the `array` is in fact an Object, when we are adding one term of `1.1` as index in `array`, we are in fact adding attributes to `array`.

```javascript
let variable = [1, 2, 3];
variable[3]; //<--- return 'undefined'
variable[1.1]=3;
console.log(variable);
// [0:1, 1:2, 1.1:3, 2:3]

let i=0
while (i < variable.length){
    console.log(variable.pop());
    i ++;
}
/*
1
2
3
*/
console.log(variable);
// [1.1: 3]
```

### 6 Useful functions for Array

`array.push(obj)` will add the object at the end of array.

`array.pop()` will return the object at the end of array and remove the object at the end of array.



`array.shift()` will return the object at the beginning of array and remove the object at the beginning

`array.unshift()` will add one object at the beginning of array



`array.splice(start_index, slice_length)` will change the **array's content** and return the array that has been cut off.

`array.slice(start_index, end_index)` will **NOT** change the array's content and will return the array in that range. (somehow similar to Python, slice will NOT include the element at end_index)

```javascript
let arr = [1, 2, 3]
> arr.slice(1, 1)
[]
> arr.slice(1, 2)
[2]
> arr.slice(1, 3)
[2, 3]
> arr
[1, 2, 3]


> arr.splice(1, 1)
[2]
> arr
[1, 3]
```



## Function in JavaScript

`function`  is an object in JS.

```javascript
function foo(param_1, param_2){
    // do something here
    return result;
}
```

