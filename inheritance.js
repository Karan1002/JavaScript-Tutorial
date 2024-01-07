class Parent {
  constructor(name) {
    console.log("parent");
    this.name = name;
    console.log(name);
  }
  hello = () => {
    console.log("Karan");
  };
  eat() {
    console.log("eat food ");
  }
  sleep = (comment) => {
    console.log("sleep" + comment);
  };
}

class Enginner extends Parent {
  constructor(name) {
    console.log("child");
    super(name);
    console.log("exit");
  }
  work = () => {
    super.eat();
    console.log("slove problem");
  };
}

let c1 = new Enginner("karan");
// let c2 = new Enginner();
c1.work();
// c1.eat("Pizza");
// c1.sleep("well");
// c1.work();
// let c2 = new Enginner();
