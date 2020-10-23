// es6 箭头函数
// 类型约束(语法是:类型名)，返回值
var getUserInfos = function (user) {
    return user.name + " \u6027\u522B" + user.sex + " \u5C31\u804C\u4E8E" + user.company;
};
console.log(getUserInfos({ name: '', sex: 'm', company: '大厂' }));
