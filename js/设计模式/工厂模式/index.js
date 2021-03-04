// const ceo = {
//   name: 'ceo',
//   age: 20,
//   career: 'coder'
// }

// const jiushen = {
//   name: 'jiushen',
//   age: 21,
//   career: 'coder'
// }

// 构造器模式
// function User(name, age, career) {
//   this.name = name
//   this.age = age
//   this.career = career
// }

// const user = new User(name, age, career);


// 构造函数拆离共性
function Coder(name, age) {
  this.name = name
  this.age = age
  this.career = 'coder'
  this.work = [' 写代码','写系分','修Bug']
}
function ProductManager(name, age) {
  this.name = name
  this.age = age
  this.career = 'product-manager'
  this.work = ['订会议室', '写PRD', '催更']
}

// 用函数来拆离共性
function Factory(name, age, career) {
  switch (career) {
    case 'coder':
      return new Coder(name, age)
    case 'product-manager':
      return new ProductManager(name, age)
  }
}