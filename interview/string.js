function showCase(value) {
  // switch case内部使用严格模式判断 case是用 === 判断的！
  // 三等：判断两者类型是否相同{
  //   相同：比大小
  //   不同：false
  // }
  switch (value) {
    case 'A':
      console.log('Case A');
      break;
    case 'B':
      console.log('Case B');
      break;
    case 'C':
      console.log('Case C');
      break;
    case undefined:
      console.log('undefined');
      break;
    default:
      console.log('Dont knonw');
  }
}

showCase(new String('A')) // Sting {"A"}
showCase(String('A')) // "A"