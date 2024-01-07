const student = {
  name: "Karan",
  marks: 90,
  printmarks() {
    console.log(marks);
  },
};

let array = ["apple", "mango", "orange"];
console.log(typeof array);
array.push("litchi");
console.log(array);

const emp = {
  calTax() {
    console.log("tax 10%");
  },
};

const karan = {
  salary: 50000,
};

karan.__proto__ = emp;
console.log(karan);

class Car {
  // constructor() {
  //   console.log("HEllo");
  // }
  constructor(name) {
    console.log(name);
  }
  start() {
    console.log("Start");
  }
  stop() {
    console.log("stop");
  }
  setBrand(brand) {
    this.brandName = brand;
    console.log(this.brandName);
  }
}

let c1 = new Car("kushwaha");
console.log(c1.start());
c1.setBrand("karan");
// console.log(c1);
