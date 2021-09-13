// 约束泛型
interface IWithLength {
  length: number
}
function echoWitLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
const str = echoWitLength('str');
const obj = echoWitLength({ length: 10 });
const arr = echoWitLength([1, 2, 3]);
echoWitLength(13);

// 泛型在class中的应用
class Queue<T> {
  private data: T[] = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
}
const queue = new Queue<number>();
queue.push(1)
queue.push('str')
console.log(queue?.pop()?.toFixed())
console.log(queue?.pop()?.toFixed())


interface KeyPair<T, U> {
  key: T,
  value: U
}
let kp1: KeyPair<number, string> = { key: 1, value: 'string' }
let arr1: number[] = [1, 2]
let arr2: Array<number> = [1, 2]