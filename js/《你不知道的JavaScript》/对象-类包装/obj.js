var person = {
  name: 'jiushen',
  age: 20,
  sex: 'boy',
  drink: function() {
    console.log('I am drinking');
    this.health++
  },
  smoke() {
    console.log('I am smoking! huazi');
    this.health--
  },
  health: 100
}
// person.health++
// console.log(person.health);
// person.smoke();
// person.drink()
// person.drink()
// console.log(person.health);

// 增
person.boyfriend = 'mr.zhou'
console.log(person);

// 查
console.log(person.sex);

//改
person.sex = 'girl'
console.log(person.sex);

// 删
delete person.name
delete person.sex
console.log(person);

console.log(person.name); // undefined




