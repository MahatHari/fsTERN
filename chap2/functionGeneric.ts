/* function getLength<T>(arg: T): number {
  if (arg.hasOwnProperty('length')) {
    return arg['length'];
      
  }
  return 0;
} */
interface HasLength {
  length: number;
}
function getLength<T extends HasLength>(arg: T): number {
  return arg.length;
}
console.log(getLength<[number, number, number]>([22, 23, 24]));
console.log(getLength<string>('Hello World'));
