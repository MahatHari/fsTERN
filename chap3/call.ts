const callerObj = {
  name: 'jon',
};
function checkMyThis(age) {
  console.log(`what is this ${this}`);
  console.log(`Do i have name ? ${this.name} `);
  this.age = age;
  console.log(`What is my age ${this.age}`);
}

checkMyThis(0);
//out puts
/* what is this [object global]
Do i have name ? undefined 
What is my age 0 */

checkMyThis.call(callerObj, 25);
//out puts
/* what is this [object Object]
Do i have name ? jon 
What is my age 25 */
