// 声明函数类型返回值，并声明add2的类型
let add2: (x: number, y: number, z?:number) => number

// 声明函数类型
interface ISum {
  (x: number, y: number, z?: number): number
}
let add3: ISum = add2

// type guard
function getLength2(input: string | number): number {
  if (typeof input === 'string') {
    return input.length;
  }
  else {
    return input.toString().length;
  }
}