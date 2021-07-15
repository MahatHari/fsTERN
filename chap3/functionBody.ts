if (true) {
  var val1 = 1;
}
function go() {
  var val2 = 2;
}
console.log(val1);
//console.log(val2); function scoped

// let and const

namespace lets {
  let val1 = 1;
  val1 = 2;

  if (true) {
    let val2 = 3;
    val2 = 4;
  }
  console.log(val1);
  console.log(val2); // errors as val 2 is block scoped
}
