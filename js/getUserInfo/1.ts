// es6 箭头函数
// 类型约束(语法是:类型名)，返回值
const getUserInfos = (user:{name: string, sex: string, company: string}):string => {
  return `${user.name} 性别${user.sex} 就职于${user.company}`;
}
console.log(getUserInfos({ name: 'xm', sex: 'm', company: '大厂' }));
// 