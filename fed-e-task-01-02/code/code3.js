// var fn = function (name) {
//     console.log(name);
// };
// fn('zoe');

function Person() {
  this.name = "name";
  this.age = 20;
  this.fn = () => {
    return this.age;
  };
}

const p1 = new Person();
const age = p1.fn();

function Person() {
  this.name = "name";
  this.age = 20;
}

const p1 = new Person();
const age = p1.age;
