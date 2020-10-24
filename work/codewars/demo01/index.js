function generateHashTagCapitalStringWithHashTag(str) {
  // 1. 用&&代替if判断
  // 2. 三元运算符
  // return str.length != 0 && str.length < 140 &&
  //   '#' + str.split(' ')
  //   // es6 数组新方法遍历数组的每一项，并用一个函数处理，返回新的数组
  //       .map(function(word) {
  //         // charAt() 方法用于返回指定索引处的字符。索引范围为从 0 到 length() - 1。
  //         // slice() 方法可从已有的数组中返回选定的元素。
  //         // hello => Hello
  //         return word.charAt(0).toUpperCase() + word.slice(1)
  //         // return word.toUpperCase()
  //       })
  //       // join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。
  //       .join(' ')
  return str.length == 0 || str.length > 140 ? false :
    '#' + str.split(' ')
      // es6 数组新方法遍历数组的每一项，并用一个函数处理，返回新的数组
      .map(function (word) {
        // charAt() 方法用于返回指定索引处的字符。索引范围为从 0 到 length() - 1。
        // slice() 方法可从已有的数组中返回选定的元素。
        // hello => Hello
        return word.charAt(0).toUpperCase() + word.slice(1)
        // return word.toUpperCase()
      })
      // join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。
      .join(' ')
}
function generateHashTagCapitalStringWithHashTag2(str) {
  // capitalize 会获取父函数的参数作为参数
  return str.length > 140 || str === '' ? false : '#' + str.split(' ').map(capitalize).join(' ')
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}


console.log(generateHashTagCapitalStringWithHashTag('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));
// console.log('hello'.toUpperCase());
console.log(generateHashTagCapitalStringWithHashTag2('hello world'));