// nums1 = [1,2,2,1], nums2 = [2,2]
// 给定两个数组，编写一个函数来计算它们的交集。
var intersection = function (nums1, nums2) {
  let map = new Map(); // 键值对
  let set = new Set(); // 不重复的键值对
  nums2.forEach((item) => {
    map.set(item, true)
  });
  for (let num of nums1) {
    if (map.has(num)) {
      set.add(num)
    }
  }
  // 方法返回一个Iterator 对象，这个对象以插入Set 对象的顺序包含了原 Set 对象里的每个元素。
  return Array.from(set.values())
};