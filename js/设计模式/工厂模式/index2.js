function User(name, age, career, work) {
  this.name = name
  this.age = age
  this.career = career
  this.work = work
}

// 用函数来拆离共性
function Factory(name, age, career) {
  let work;
  switch (career) {
    case 'coder':
      work = ['写代码', '写系分', '修Bug']
      break
    case 'product-manager':
      work = ['订会议室', '写PRD', '催更']
      break
      //...
  }
  return new User(name, age, career, work)
}