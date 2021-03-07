//设计-个支持以下两种操作的数据结构
// void addWorld (word)
// bool search(word)  . a - z
// addWord('bad')
// addWord('dad')
// addWord('mad')

// // 既可以搜索文字，也可以搜索正则表达式， . 点代表可以任意替代的值
// search('pad') // false
// search('bad') // true
// search('.ad') // true
// search('b..') // true

const WordDictionary = function() {
  this.words = {}
}

WordDictionary.prototype.addWord = function(word) {
  let len = word.length
  if (this.words[len]) {
    if (this.words[len].indexOf(word) === -1) {
      this.words[len].push(word)
    } else return 
  }
  this.words[len] = [word]
}

WordDictionary.prototype.search = function (word) {
  let len = word.length
  
  if (this.words[len]) {
    if (!word.includes('.')) {
      return this.words[len].includes(word)
    } else {
      const reg = new RegExp(word);
      return this.words[len].some((item) => {
        return reg.test(item)
      })
    }
  } else return false
}

let test = new WordDictionary()
test.addWord('hello')
console.log(test.search('hello'));
console.log(test.search('hell.'));
