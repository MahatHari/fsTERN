const myFunc = (message: string): void => {
  console.log(message);
};

myFunc('Hello');

// arrow function body styles

const func = () => console.log('func');
const func1 = () => ({ name: 'dave' });
const func2 = () => {
  const val1 = 20;
  return val1;
};

console.log(func());
console.log(func1());
console.log(func2());
