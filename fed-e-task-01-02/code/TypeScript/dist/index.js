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
// 枚举 编译后会产生键值对 可通过键值进行访问
// 默认从0开始
var Status1;
(function (Status1) {
    Status1[Status1["a"] = 0] = "a";
    Status1[Status1["b"] = 1] = "b";
    Status1[Status1["c"] = 2] = "c";
})(Status1 || (Status1 = {}));
// 默认递增
var Status2;
(function (Status2) {
    Status2[Status2["a"] = 7] = "a";
    Status2[Status2["b"] = 8] = "b";
    Status2[Status2["c"] = 9] = "c";
})(Status2 || (Status2 = {}));
// 字符串必须手动设置 因为无法进行递增
var Status3;
(function (Status3) {
    Status3["a"] = "a1";
    Status3["b"] = "b2";
    Status3["c"] = "c3";
})(Status3 || (Status3 = {}));
var object = {
    // a
    status1: Status1[0],
    // 7
    status2: Status2["a"],
    // a1
    status3: Status3["a1"],
    // a1
    status4: Status4["a1"],
};
console.log(object);
//# sourceMappingURL=index.js.map