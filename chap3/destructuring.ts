function getEmployee(id) {
  return {
    name: 'John',
    age: 35,
    address: '123 St',
    country: 'United States',
  };
}
const { name: fullName, age } = getEmployee(22);
console.log('employee', fullName, age);

function getEmployeeWorkInfo(id) {
  return [id, 'office St', 'France'];
}
const [id, officeddress] = getEmployeeWorkInfo(33);
console.log('employee', id, officeddress);

// rest parameters
function doSomething(a, ...others) {
  console.log(a, others, others[others.length - 1]);
}
doSomething(1, 2, 3, 45, 67);

// find
const items = [
  { name: 'jon', age: 20 },
  { name: 'linda', age: 22 },
  { name: 'jon', age: 23 },
];
const jon = items.find((item) => {
  return item.name === 'jon';
});
console.log(jon);

//filter
const results = items.filter((item, index) => {
  return item.name === 'jon';
});
console.log(results);

// map
const employees = [
  { name: 'tim', id: 1 },
  { name: 'cindy', id: 2 },
  { name: 'rob', id: 3 },
];
const elements = employees.map((item, index) => {
  return `<div> ${item.id} -${item.name} </div>`;
});

console.log(elements);

//reduce
const allTrucks = [2, 5, 7, 10];
const initialCapacity = 0;
const allTonnage = allTrucks.reduce((totalCapacity, currentCapacity) => {
  totalCapacity = totalCapacity + currentCapacity;
  return totalCapacity;
}, initialCapacity);
console.log(allTonnage);

//some and every
const widgets = [
  { id: 1, color: 'blue' },
  { id: 2, color: 'yellow' },
  { id: 3, color: 'orange' },
  { id: 4, color: 'blue' },
];

console.log(
  'some are blue',
  widgets.some((items) => {
    return items.color === 'blue';
  })
);

console.log(
  'every one is blue',
  widgets.every((item) => {
    return item.color === 'blue';
  })
);
