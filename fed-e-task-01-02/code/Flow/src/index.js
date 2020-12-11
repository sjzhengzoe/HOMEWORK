// @flow

// function sum(num1, num2) {
//   return num1 * num2;
// }
// sum("100", "100");

// let num: number = 1;
// let str: number = "1";

// function sum(num1: string, num2: string): number {
//   return num1 + num2;
// }
// sum("1", "2");

// const a: string = "1";
// const b: number = 1; // NaN || Infinity
// const c: boolean = true;
// const d: null = null;
// const e: void = undefined;
// const f: symbol = Symbol();

// const arr1: Array<number> = [1, 2];
// const arr2: number[] = [1, 2];
// // 元祖
// const arr3: [number, string] = [1, "2"];

// const obj1: { foo: string, bar: number } = { foo: "123", bar: 123 };
// const obj2: { foo?: String, bar: number } = { bar: 123 };
// const obj3: { [string]: number } = { str: 123 };

// function fn1(): number {
//   return 1;
// }
// const fn2 = (): number => 2;

// function fn3(callback: (number) => void) {}
// fn3(function (number) {});

// // 使用mixed需要在内部进行判断类型 不然会报错 如下
// function fn1(params: mixed) {
//   return params + params;
// }

// // 相当于 string | number | boolean ...
// // 在内部进行判断后 就不会报错 如下
// function fn1(params: mixed) {
//   if (typeof params == "number") {
//     return params + params;
//   } else if (typeof params == "string") {
//     return params + params;
//   }
// }
// // 可以是任意类型 与mixed的区别就是 mixed是强类型 any是弱类型 主要用于兼容以前的代码
// // 如下使用也不会报错
// function fn1(params: any) {
//   return params + params;
// }

// 这里可能返回的类型就是 HTMLElement | null
// const element: HTMLElement | null = document.getElementById("root");
