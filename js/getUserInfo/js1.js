const cfw = {
  name: '陈方闻',
  company: '百度',
  sex: '男'
}
console.log(`${cfw.name},性别${cfw.sex},就职于${cfw.company}`);
const yds = {
  name: '叶弘丰',
  company: '滴滴',
  sex: '男'
}
console.log(`${yds.name},性别${yds.sex},就职于${yds.company}`);

// 功能重复 => 函数 => 对功能的封装
function getUserInfo(student) {
  if(!student) return;
  console.log(`${student.name},性别${student.sex},就职于${student.company}`);
}

getUserInfo() 
