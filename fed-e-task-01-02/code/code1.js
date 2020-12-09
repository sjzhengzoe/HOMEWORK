// const arr = [1, 2, 3];

// // a=1 b=2 c=3
// const [a, b, c] = arr;

// // d = 3;
// const [, , d] = arr;

// // rest = [2, 3];
// const [a, ...rest] = arr;
// // a=1
// csont[a] = arr;

// // d = undefined
// const [a, b, c, d] = arr;

// // d = init
// const [a, b, c, d = "init"] = arr;

// =================================================

// const obj = { name: "name", age: "18" };

// // name = 'name'
// const { name } = obj;

// // name2 = 'name'
// const { name: name2 } = obj;

// // name2 = 'name'
// const { name: name2 = "init" } = obj;

// // val = 'init
// const { val = "init" } = obj;

// =================================================
// // 实现123换行输出
// // 1
// // 2
// // 3

// // es5
// const strOld = "1 \n" + "2\n" + "3";
// // es6
// const str = `1
// 2
// 3`;

// const name = "Tom";
// const str = `my name is ${name}`;

// =================================================

// const name = "tom";
// const gender = true;
// function tag(str, name, gender) {
//   const sex = gender ? "man" : "woman";
//   // [ 'hey,', 'is a ', '' ] tom true
//   console.log(str, name, gender);
//   return `your gender is ${sex}`;
// }

// const result = tag`hey,${name}is a ${gender}`;
// // your gender is man
// console.log(result);

// =================================================

// const str = "start with end";

// // true
// console.log(str.startsWith("start"));
// // true
// console.log(str.endsWith("end"));
// // true
// console.log(str.includes("with"));

// =================================================

// function fn(name = "Tom") {
//   console.log("Tom");
// }
// fn();

// =================================================

// function fn(name, ...rest) {
//   // [23,'man]
//   console.log(rest);
// }

// fn("TOM", 23, "man");

// =================================================

// const arr = [1, 2, 3];

// console.log(...arr);

// =================================================

// const bar = "123";
// const obj = {
//   bar,
//   fn1() {
//     // 类似function定义的this 为obj
//     console.log(this);
//   },
//   fn2: () => {
//     // 指向全局作用域的this
//     console.log(this);
//   },
//   ["a" + "b" + bar]: "value",
// };

// obj.fn1();
// obj.fn2();
// console.log(obj.ab123);

// =================================================

// // { a: 1, b: 2 }
// console.log(Object.assign({}, { a: 1 }, { b: 2 }));

// =================================================

// // true
// console.log(0 == false);
// // false
// console.log(0 === false);
// // true
// console.log(+0 === -0);
// // false
// console.log(NaN === NaN);
// // false
// console.log(Object.is(+0, -0));
// // true
// console.log(Object.is(NaN, NaN));

// =================================================

// const person = {
//   name: "Tom",
//   age: 20,
// };
// const personProxy = new Proxy(person, {
//   get(target, property) {
//     return property in target ? target[property] : "default";
//   },
//   set(target, property, value) {
//     if (property == "age") {
//       if (typeof value == "number") {
//         target[property] = value;
//       } else {
//         console.log("error");
//       }
//     }
//   },
// });
// // 20
// console.log(personProxy.age);
// // default
// console.log(personProxy.gender);

// personProxy.age = 24;
// // { name: 'Tom', age: 24 }
// console.log(personProxy);

// personProxy.age = "25";
// // error

// =================================================

// const list = [];
// const listProxy = new Proxy(list, {
//   set(target, property, value) {
//     // 每一次push其实执行了两次set
//     // set 0 100
//     // set length 1
//     console.log("set", property, value);
//     target[property] = value;
//     return true;
//   },
// });

// listProxy.push(100);

// =================================================

// const list = [];

// // 没有定义get方法
// const listProxy = new Proxy(list);
// // 等同于 如下
// const listProxy = new Proxy(list, {
//   get(target, property) {
//     return Reflect.get(target, property);
//   },
// });

// // console.log('name' in obj);
// // console.log(delete obj['age'])
// // console.log(Object.keys(obj))
// Reflect.has(obj, "name");
// Reflect.deleteProperty(obj, "age");
// Reflect.ownKeys(obj, "age");

// =================================================

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.say = function () {
//   console.log("my name is " + this.name);
// };
// new Person("tom").say();

// // 等同于

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   say() {
//     console.log("my name is " + this.name);
//   }
// }
// new Person("Tom").say();

// =================================================

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   say() {
//     console.log("my name is " + this.name);
//   }
//   static creat(name) {
//     // 指向的是类本身 Person
//     console.log(this);
//     return new Person(name);
//   }
// }
// Person.creat("Tom").say();

// =================================================
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   say() {
//     console.log("my name is " + this.name);
//   }
//   static creat(name) {
//     return new Person(name);
//   }
// }

// class Student extends Person {
//   constructor(name, number) {
//     // 调用父类构造器
//     super(name);
//     this.number = number;
//   }
//   hello() {
//     // 调用父类方法
//     this.say();
//   }
// }
// new Student("zoe", 9785).hello();
// // 调用父类的静态方法
// console.log(Student.creat("zoe"));

// =================================================

// const s = new Set();

// console.log(s.add(1).add(2).add(1));

// for (let i of s) {
//   console.log(i);
// }
// // 相关api
// console.log(s.size);
// console.log(s.has(2));
// console.log(s.delete(1));
// s.clear();
// console.log(s);

// // 数组去重
// const arr1 = [...new Set([1, 2, 3, 1])];
// const arr2 = Array.from(new Set([1, 2, 3, 3]));
// console.log(arr1, arr2);

// =================================================

// const obj = {};
// let num1 = Symbol();
// let num2 = Symbol();

// obj[num1] = 1;
// obj[num2] = 2;
// // { [Symbol()]: 1, [Symbol()]: 2 }
// console.log(obj);
// // undefined
// console.log(obj[Symbol()]);
// // 1
// console.log(obj[num1]);

// =================================================

// // 1、for 类似于实现 普通的变量
// const s1 = Symbol.for("true");
// const s2 = Symbol.for(true);
// // true
// console.log(s1 === s2);

// // 2、更改obj的类型
// const obj = {
//   [Symbol.toStringTag]: "new Type",
// };
// // [object new Type]
// console.log(obj.toString());
// // 3、无法通过for循环、Object.keys()、JSON.stringify获取到 Symbol 属性值 所以特别适合作为对象的属性值

// // 4、通过 Object.getOwnPropertySymbols(obj) 只能获取 Symbol的属性名

// =================================================

// const set = new Set(["foo", "bar", "baz"]);

// const iterator = set[Symbol.iterator]();

// // { value: 'foo', done: false }
// console.log(iterator.next());

// // { value: 'bar', done: false }
// console.log(iterator.next());

// // { value: 'baz', done: false }
// console.log(iterator.next());

// // { value: undefined, done: true }
// console.log(iterator.next());

// =================================================

// const obj = {
//   store: ["foo", "bar", "baz"],
//   [Symbol.iterator]: function () {
//     let index = 0;
//     return {
//       next: () => {
//         let result = {
//           value: this.store[index],
//           done: index >= this.store.length,
//         };
//         index++;
//         return result;
//       },
//     };
//   },
// };

// for (const item of obj) {
//   // foo
//   // bar
//   // baz
//   console.log(item);
// }

// =================================================

// // 某种数据结构 每次更改数据结构 对应的循环遍历就要更新
// // 可以给这个对象添加一个通用的公共方法
// // 当更改数据结构的时候 对应的循环遍历 就不需要更新
// // 这种思想就是迭代器模式
// // 可通过可迭代器的方式来解决上述的问题
// const todos = {
//   life: ["eat", "sleep", "play"],
//   learn: ["english", "math"],
// };

// // eat
// // sleep
// // play
// for (let i of todos.life) {
//   console.log(i);
// }
// // english
// // math
// for (let i of todos.learn) {
//   console.log(i);
// }

// =================================================

// const todos = {
//   life: ["eat", "sleep", "play"],
//   learn: ["english", "math"],
//   [Symbol.iterator]: function () {
//     let index = 0;
//     return {
//       next: () => {
//         let arr = [...this.life, ...this.learn];
//         let result = { value: arr[index], done: index >= arr.length };
//         index++;
//         return result;
//       },
//     };
//   },
// };

// for (let i of todos) {
//   console.log(i);
// }

// =================================================

// function* fn() {
//   return 100;
// }
// // Object [Generator] {}
// console.log(fn());
// // { value: 100, done: true }
// console.log(fn().next());

// =================================================

// function* fn() {
//   console.log(1);
//   yield 100;
//   console.log(2);
//   yield 200;
//   console.log(3);
//   yield 300;
// }

// const generator = fn();
// // 1
// // { value: 100, done: false }
// console.log(generator.next());

// // 2
// // { value: 200, done: false }
// console.log(generator.next());

// // 3
// // { value: 300, done: false }
// console.log(generator.next());

// =================================================

// const obj = { a: 1, b: 2 };

// // [ 1, 2 ]
// console.log(Object.values(obj));
// // [ [ 'a', 1 ], [ 'b', 2 ] ]
// console.log(Object.entries(obj));
// // 刚好 Map 需要的数据结构就是 Object.entries() 返回的数据结构
// console.log(new Map(Object.entries(obj)));

// =================================================

const p1 = {
  firstName: "sj",
  lastName: "zheng",
  get fullName() {
    return this.firstName + "" + this.lastName;
  },
};

// console.log(p1.fullName);

// const p2 = Object.assign({}, p1);
// console.log(p2);
// // 即使改变了firstName的值
// p2.firstName = "ss";
// // 仍然输出sj zheng
// // 因为 Object.assign 复制的时候将fullName方法当做一个普通值复制了
// console.log(p2.fullName);

// // 通过以下方式实现 就不会有上面的问题 ** 未实现 报错
const descriptor = Object.getOwnPropertyDescriptors(p1, "fullName");
const p3 = Object.defineProperties({}, descriptor);
p3.firstName = "ss";
console.log(p3.fullName);

// =================================================

// const books = {
//   html: 1,
//   css: 12,
//   js: 124,
// };

// for (let [key, val] of Object.entries(books)) {
//   // html------------001
//   // css-------------012
//   // js--------------124
//   console.log(key.padEnd(16, "-") + "" + val.toString().padStart(3, "0"));
// }

// =================================================

// function fn(p1, p2,) {}

// =================================================
