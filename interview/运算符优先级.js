var val = 'smtg'

console.log('Value is' + (val === 'smtg') ? 'Something' : 'Nothing'); // Something
// 判断步骤
// 1.(val === 'smtg') => true
// 2. 'Value is' + true => 'Value is true'
// 3. 'Value is true' ? 'Something' : 'Nothing'
// 4. 'Something'

// 运算符优先级 数字越高级别越高
// + 17
// () 21
// 11
// ? : 4
// Somthing

