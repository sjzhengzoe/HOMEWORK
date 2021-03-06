// var fn = function (name) {
//     console.log(name);
// };
// fn('zoe');

// function Person() {
//   this.name = "name";
//   this.age = 20;
//   this.fn = () => {
//     return this.age;
//   };
// }

// const p1 = new Person();
// const age = p1.fn();

// function Person() {
//   this.name = "name";
//   this.age = 20;
// }

// const p1 = new Person();
// const age = p1.age;

function fn(obj) {
  if (obj.a) {
    obj.a();
  } else if (obj.b) {
    obj.b();
  } else {
    obj.c();
  }
}
// console.log(fn({ b: () => console.log(1) }));
// 惰性函数
function fn(obj) {
  if (obj.a) {
    fn = obj.a;
  } else if (obj.b) {
    fn = obj.b;
  } else {
    fn = obj.c;
  }
  return fn();
}

console.log(fn({ b: () => console.log(1) }));
console.log(fn({ b: () => console.log(1) }));
console.log(fn({ b: () => console.log(1) }));
console.log(fn({ b: () => console.log(1) }));
