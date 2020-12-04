# 简答题

## 一、谈谈你是如何理解 JS 异步编程的，EventLoop、消息队列都是做什么的，什么是宏任务，什么是微任务？

JS 本身是单线程的，但是浏览器是多线程的，将一些异步的任务交给浏览器其他线程执行，再通过 JS 的回调函数、Promise 等来处理这些异步的代码来达到异步编程。
宏任务例如同步的代码、setTimeOut
微任务例如 Promise
消息队列就是用来存放当前执行代码产生的一些异步的代码的回调代码。
通过事件循环不断的去检查消息队列是否有任务需要执行，有则执行。

# 代码题

## 一、将下面异步代码使用 Promise 的方式改进

setTimeout(function() {
var a = 'hello'
setTimeout(function() {
var b = 'lagou'
setTimeout(function() {
var c = 'I ❤️ U'
console.log(a + b + c)
}, 10);
}, 10);
}, 10);

#### 回答：

new Promise((resolve) => {
setTimeout(() => {
var a = "hello ";
resolve(a);
}, 10);
})
.then((value) => {
var b = "lagou ";
return value + b;
})
.then((resolve) => {
var c = "i love you";
console.log(resolve + c);
});

## 二、基于以下代码完成下面的四个练习

const fp = require('lodash/fp')
// 数据：horsepower 马力，dollar_value 价格，in_stock 库存
const cars = [
{ name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true },
{ name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false },
{ name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false },
{ name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false },
{ name: 'Aston Martin One-77', horsepower: 750, dollar_value: 185000, in_stock: true },
{ name: 'Pagani Huayra', horsepower: 700, dollar_value: 130000, in_stock: false }
]

### 练习 1：使用组合函数 fp.flowRight() 重新实现下面这个函数

let isLastInStock = function(cars){
// 获取最后一条数据
let last_car = fp.last(cars)
// 获取最后一条数据的 in_stock 属性值
return fp.prop('in_stock', last_car)
}

#### 回答

const isLastInStock = fp.flowRight(fp.prop("in_stock"), fp.last);

### 练习 2：使用 fp.flowRight()、fp.prop() 和 fp.first() 获取第一个 car 的 name

#### 回答

const fn = fp.flowRight(fp.prop("name"), fp.first);
fn(cars);

### 练习 3：使用帮助函数 \_average 重构 averageDollarValue，使用函数组合的方式实现

let \_average = function(xs){
return fp.reduce(fp.add, 0, xs) / xs.length
}

#### 回答

let averageDollarValue = fp.flowRight(\_average,fp.map("dollar_value"))

### 练习 4：使用 flowRight 写一个 sanitizeNames() 函数，返回一个下划线连续的小写字符串，把数组中的 name 转换为这种形式，例如：sanitizeNames(["Hello World"]) => ["hello_world"]

#### 回答

let sanitizeNames = fp.flowRight(fp.to)
const fn = fp.flowRight(
fp.map(\_underscore),
fp.map((item) => fp.toLower(item)),
fp.map((item) => item.name)
);

## 三、基于下面提供的代码，完成后续的四个练习

// support.js
class Container {
static of(value){
return new Container(value)
}
constructor(value){
this.\_value = value
}
map(fn){
return Container.of(fn(this.\_value))
}
}
class Maybe {
static of(x){
return new Maybe(x)
}
isNothing(){
return this.\_value === null || this.\_value === undefined
}
constructor(x){
this.\_value = x
}
map(fn){
return this.isNothing() ? this : Maybe.of(fn(this.\_value))
}
}
module.exports = { Maybe, Container }

### 练习 1：使用 fp.add(x, y) 和 fp.map(f,x) 创建一个能让 functor 里的值增加的函数 ex1

const fp = require('lodash/fp')
const {Maybe, Container} = require('./support')
let maybe = Maybe.of([5,6,1])

#### 回答

let ex1 = () => {
return maybe.map(arr=>fp.map(fp.add(1),arr))
}

### 练习 2：实现一个函数 ex2，能够使用 fp.first 获取列表的第一个元素

const fp = require('lodash/fp')
const {Maybe, Container} = require('./support')
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])

#### 回答

let ex2 = () => {
return x2.map(arr=>fp.first(arr))
}

### 练习 3：实现一个函数 ex3，使用 safeProp 和 fp.first 找到 user 的名字的首字母

const fp = require('lodash/fp')
const {Maybe, Container} = require('./support')
let safeProp = fp.curry(function(x, o){
return Maybe.of(o[x])
})
let user = { id: 2, name: 'Albert' }

#### 回答

let ex3 = () => {
return safeProp(user)("name").map(name=>fp.first(name))
}

### 练习 4：使用 Maybe 重写 ex4，不要有 if 语句

const fp = require('lodash/fp')
const {Maybe, Container} = require('./support')

#### 回答

let ex4 = function(n){
return Maybe.of(n).map(parseInt)
}

## 四、手写实现 MyPromise 源码

要求：尽可能还原 Promise 中的每一个 API，并通过注释的方式描述思路和原理。

#### 回答

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECT = "reject";
class MyPromise {
constructor(fn) {
try {
fn(this.resolve, this.reject);
} catch (error) {
this.reject(error);
}
}
// 存储该 Promise 状态
status = PENDING;
// 成功的数据
value = undefined;
// 成功的回调存储
resolveCallback = [];
// 失败的数据
reason = undefined;
// 失败的回调存储
rejectCallback = [];
// 修改状态为 resolve 函数
resolve = (value) => {
if (this.status == PENDING) {
this.status = FULFILLED;
this.value = value;
while (this.resolveCallback.length) {
this.resolveCallback.shift()();
}
}
};
// 修改状态为 reject 函数
reject = (reason) => {
if (this.status == PENDING) {
this.status = REJECT;
this.reason = reason;
while (this.rejectCallback.length) {
this.rejectCallback.shift()();
}
}
};
then(
resolveCallback = (value) => value,
rejectCallback = (reason) => {
// 因为要传递一个 reject 所以为了能够走到 reject 必须抛出一个错误让 catch 捕获
throw reason;
}
) {
let returnPromise = new MyPromise((resolve, reject) => {
if (this.status == FULFILLED) {
setTimeout(() => {
try {
let value = resolveCallback(this.value);
// value 有两种可能
// 正常值 => 直接返回正常值
// Promise 对象 => 等待结果再处理
this.returnValueDeal(value, returnPromise, resolve, reject);
} catch (error) {
reject(error);
}
}, 0);
} else if (this.status == REJECT) {
setTimeout(() => {
try {
let reason = rejectCallback(this.reason);
this.returnValueDeal(reason, returnPromise, resolve, reject);
} catch (error) {
reject(error);
}
}, 0);
} else {
this.resolveCallback.push(() => {
setTimeout(() => {
try {
let value = resolveCallback(this.value);
this.returnValueDeal(value, returnPromise, resolve, reject);
} catch (error) {
reject(error);
}
}, 0);
});
this.rejectCallback.push(() => {
setTimeout(() => {
try {
let reason = rejectCallback(this.reason);
this.returnValueDeal(reason, returnPromise, resolve, reject);
} catch (error) {
reject(error);
}
}, 0);
});
}
});
return returnPromise;
}
returnValueDeal(returnValue, returnPromise, resolve, reject) {
if (returnPromise == returnValue) {
reject(new TypeError("Chaining cycle detected for promise #<Promise>"));
} else if (returnValue instanceof MyPromise) {
returnValue.then(resolve, reject);
} else {
resolve(returnValue);
}
}
static all(arr) {
return new MyPromise((resolve, reject) => {
let result = [];
let index = 0;
function add(key, item) {
result[key] = item;
index++;
if (index == arr.length) {
resolve(result);
}
}
arr.map((item, key) => {
if (item instanceof MyPromise) {
item.then((value) => add(key, value), reject);
} else {
add(key, item);
}
});
});
}
static resolve(val) {
if (val instanceof MyPromise) {
return val;
} else {
return new MyPromise((resolve, reject) => {
resolve(val);
});
}
}
finally(fn) {
// finally 就是在模拟一个 then 方法
// 需要多考虑一个情况就是 fn 是一个 Promise 我们需要等待完成后 再将 Promise 的数据传给下一个 then
return this.then(
(value) => {
return MyPromise.resolve(fn()).then(() => value);
},
(reason) => {
return MyPromise.resolve(fn()).then(() => {
throw reason;
});
}
);
}
catch(fn) {
return this.then(undefined, fn);
}
}
