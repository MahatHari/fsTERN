function MyFunction() {
  console.log(this);
}

MyFunction(); // calls node scoped global this
let test = new MyFunction(); // calling object scoped
