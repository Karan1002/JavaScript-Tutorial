class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("hello");
  }
}

let s1 = new User("karan", "karan@gmail.com");
let s2 = new User("nitesh", "nitesh@gmail.com");
s1.viewData();

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    console.log("admin");
  }
}

let a1 = new Admin("admin", "admin@gmail.com");
