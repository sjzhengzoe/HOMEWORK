// const fn4: (name: string) => void = (name: string) => {
//   console.log("hello", name);
// };
// fn4("zoe");

// const a: string = "str";
// const b: number = 1;
// const c: boolean = true;
// const d: void = undefined;
// const e: null = null;
// const f: undefined = undefined;

// // 设置了strictNullChecks:true
// // 会报错 不支持 默认null|undefined
// const g: string = null;
// const h: void = null;

// const a: symbol = Symbol();
// console.log(1);

// const obj1: object = {}; // [] | function | {}
// // 限制 类型 但是更专业的是通过接口
// const obj2: { p1: string; p2: number } = { p1: "123", p2: 1 };

// const arr1: Array<number> = [1, 2];
// const arr2: number[] = [1, 2];

// const arr: [string, number] = ["1", 1];
// const a: string = arr[0];
// const b: number = arr[1];
// const [c, d] = arr;

// // 枚举 编译后会产生键值对 可通过键值进行访问
// // 默认从0开始
// enum Status1 {
//   a, // 0
//   b, // 1
//   c, // 2
// }

// // 默认递增
// enum Status2 {
//   a = 7,
//   b, // 8
//   c, // 9
// }

// // 字符串必须手动设置 因为无法进行递增
// enum Status3 {
//   a = "a1",
//   b = "b2",
//   c = "c3",
// }

// // 常量枚举 编译后不会产生键值对 而是直接的值
// const enum Status4 {
//   a = "a1",
//   b = "b2",
//   c = "c3",
// }

// const object = {
//   // a
//   status1: Status1[0],
//   // 7
//   status2: Status2["a"],
//   // a1
//   status3: Status3["a1"],
//   // 常量枚举无法通过键值对获取 报错
//   status4: Status4["a1"],
// };
// console.log(object);

// function fn(a: number, b: string, c?: string, ...rest: number[]): string {
//   return "a";
// }

// const fn2: (a: number, b: string, c?: string, ...rest: number[]) => string = function (a: number, b: string, c?: string, ...rest: number[]): string {
//   return "a";
// };

// // 隐式推断为数字
// let a = 1;
// // 赋值为字符串会报错
// a = "1";

// // 无法推断 就会被定义为Any
// function sum(num1, num2) {
//   return num1 * num2;
// }
// sum("1", 1);

// const nums = [1, 2, 3];
// const res = nums.find((i) => i > 0);
// // 此处会报错 因为ts认为res可能是undefined
// const square = res * res;

// const nums = [1, 2, 3];
// const res = nums.find((i) => i > 0) as number;
// // 此处会报错 因为ts认为res可能是undefined
// const square = res * res;

// interface Obj {
//   a: string;
//   // 可选
//   b?: string;
//   // 只读
//   readonly c: string;
//   // key 定义类型 val定义类型 但是会和可选发生冲突
//   // [prop: string]: string;
// }
// function fn(obj: Obj) {
//   console.log(obj.a);
//   console.log(obj.b);
// }

// fn({ a: "a", c: "c" });

// class Person {
//   public name: string;
//   age: number;
//   private gender: string;
//   protected readonly love: string;

//   constructor(obj: { name: string; age: number; gender: string; love: "man" }) {
//     this.name = obj.name;
//     this.age = obj.age;
//     this.gender = obj.gender;
//     this.love = obj.love;
//   }
//   say(gender: string): string {
//     return this.gender;
//   }
// }

// const p1 = new Person({ name: "zoe", age: 18, gender: "man", love: "man" });
// // 被定义为私有属性 不可获取 报错
// p1.gender;
// // 默认是public 可获取
// p1.age;
// // 被保护的 也不可获取 但是子类可以获取
// p1.love;

// interface eat {
//   eat: (food: string) => void;
// }
// interface run {
//   run: (distance: string) => void;
// }

// // 必须有两个接口的方法
// class Person implements eat, run {
//   eat = (food: string): void => {
//     console.log("person", food);
//   };
//   run = (distance: string): void => {
//     console.log("run", distance);
//   };
// }

// class Animal {
//   eat = (food: string): void => {
//     console.log("animal", food);
//   };
//   run = (distance: string): void => {
//     console.log("run", distance);
//   };
// }

// abstract class Animal {
//   eat = (food: string): void => {
//     console.log("animal", food);
//   };
//   // 抽象方法必须在子类中被实现
//   abstract run(distance: string): void;
// }

// class Cat extends Animal {
//   run(distance: string): void {
//     console.log("car", distance);
//   }
// }

// // 同样的逻辑 但是要创建不同的类型 重复写就很冗余 所以采用泛型
// function fn1(value: string): string[] {
//   console.log(value);
//   return ["100"];
// }

// function fn2(value: number): number[] {
//   console.log(value);
//   return [100];
// }

// function fn<T>(value: T): T[] {
//   console.log(value);
//   return [];
// }
// fn<string>("1");
// fn<Number>(1);

// import { camelCase } from "lodash";
// camelCase("hello");
