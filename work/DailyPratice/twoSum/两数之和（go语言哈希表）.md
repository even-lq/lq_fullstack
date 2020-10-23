### go语言解法

```go
func twoSum(nums []int, 
 target int) []int {
    
  // := 是声明并赋值，并且系统自动推断类型，不需要var关键字
  h := make(map[int]int) //  分配hashTable内存，并返回一个初始化的值
  // js for python 
  for i, value := range nums {
   //如果wanted:=h[value],返回ok，如果ok就执行下面的代码
   if wanted, ok := h[value]; ok {
    return []int{wanted, i}
   } else {
    h[target-value] = i
   }
  }
  //nil表示很多map类型的零值
  return nil

}
```

### JavaScript对象字面量解法

```js
var nums = [2, 7, 11, 15]
var twoSum = function (nums, target) {
  // let map = [] /*也可以*/
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] != undefined) { 
      console.log(map)
      return [map[nums[i]], i]
    } else {
      map[target - nums[i]] = i
    }
  }
};
console.log(twoSum(nums, 9))

// var a = [{ 1: 3 }, { 2: 4 }, { 3: 5 }] 
// console.log(a)
```

