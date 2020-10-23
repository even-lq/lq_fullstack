// 接口定义对象
interface IUser {
  name: string;
  age: number;
}

// type 类型别名
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// => 函数类型定义
type IUserInforFunc = (user: IUser) => string;

// 该函数的约束类型：IUserInforFunc
const getUserInfo:IUserInforFunc = (user) => `
  name: ${user.name}, age: ${user.age}
`

