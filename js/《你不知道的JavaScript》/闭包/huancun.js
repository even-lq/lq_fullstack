// 2. 创造缓存
// 在缓存中的值改变，外部调用缓存中的值是缓存内改变过的值
function test() {
  var food = 'apple'

  function a() {
    console.log(food);
    food = 'banana'
  }
  function b() {
    console.log(food);
  }
  return {
    a:a,
    b:b
  }
}
var obj = test()
obj.a()
obj.b()



function fruit() {
  var food = 'apple'
  var obj = {
    earFood: function() {
      if (food != '') {
        console.log('I am eating ' + food);
        food = ''
      }else { 
        console.log('There is nothing to eat');
      }
    }, 
    pushFood: function(myfood) {
      food = myfood
    }
  }
  return obj
}

var person = fruit() 
person.earFood()
person.earFood()
person.pushFood('banana')
person.earFood()


