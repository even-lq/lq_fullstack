const nameList1 = [
  { mid: '哈傻k', profession: '中单' },
  { mid: '沙皇', profession: '中单' },
  { mid: '卡牌', profession: '中单' },
  { mid: '发条', profession: '中单' },
];
const nameList2 = [
  { adc: '轮子妈', profession: ' ADC' },
  { adc: 'VN', profession: ' ADC' },
  { adc: '老鼠', profession: ' ADC' },
];
const curring = name => element => element[name];
const name_mid = curring('mid');
const name_adc = curring('adc');
console.log(nameList1.map(name_mid));
console.log(nameList2.map(name_adc));
