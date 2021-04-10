// 作为一个手串艺人，有金主向你订购了一条包含n个杂色串珠的手串——每个串珠要么无色，要么涂了若干种颜色。
// 为了使手串的色彩看起来不那么单调，金主要求，手串上的任意一种颜色（不包含无色），在任意连续的m个串珠里至多出现一次（注意这里手串是一个环形）。
// 手串上的颜色一共有c种。现在按顺时针序告诉你n个串珠的手串上，每个串珠用所包含的颜色分别有哪些。
// 请你判断该手串上有多少种颜色不符合要求。即询问有多少种颜色在任意连续m个串珠中出现了至少两次。

// ReadLine方法
// 从TextStream文件中读取一整行(一直到换行符, 但不包括换行符)，并返回由此得到的字符串。

// 链接：https://www.nowcoder.com/questionTerminal/0bb1fad52f474bdaa4d7636ca3a98244?f=discussion
// 来源：牛客网

const readline = require('readline');

let ballNums,
  linkNums,
  colorNums,
  ballColor = [],
  sameColorBall = [],
  count = 0;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 第一行输入n，m，c三个数，用空格隔开。(1 <= n <= 10000, 1 <= m <= 1000, 1 <= c <= 50)
// 接下来n行每行的第一个数num_i(0 <= num_i <= c)表示第i颗珠子有多少种颜色。接下来依次读入num_i个数字，每个数字x表示第i颗柱子上包含第x种颜色(1 <= x <= c)


// 初始化串珠的总个数(ballNums)，连续串珠个数(linkNums)，颜色总类(colorNums)，
// 所有串珠的颜色信息数组(ballColor)，同一颜色的串珠数组(sameColorBall)，不合格的颜色个数(count)

// 依次保存每个串珠所用的颜色信息
// 数组的每一个元素都是一个数组，元素的第一位代表颜色的个数，后续代表所用颜色[3, a, b, c]
rl.question("请以空格分开输入：串珠的总个数(ballNums)，连续串珠个数(linkNums)，颜色总类(colorNums)", arr => {
  [ballNums, linkNums, colorNums] = arr.split(' ').map(item => Number(item))
  console.log([ballNums, linkNums, colorNums]);
  let i = 0
  rl.on("line", bc => {
    ballColor[i] = bc.split(' ').map(item => Number(item))
    ++i


    if (i > ballNums - 1 || bc === 'p') {
      // 收集同一个颜色出现的串珠号
      ballColor.forEach((item, index) => {
        //若该串珠所用的颜色种类大于0
        if (item[0] > 0) {
          let colorArr = item.slice(1)
          colorArr.forEach(color => {
            //如果之前已经保存过使用某种颜色的串珠号，那就直接将其添加到数组中
            if (sameColorBall[color]) {
              sameColorBall[color].push(index + 1)
            } else {
              sameColorBall[color] = [index + 1]
            }
          })
        }
      })
      console.log(sameColorBall);
      sameColorBall.forEach(item => {
        // sameColorBall[0] 代表的是使用了'0'这种颜色的所有串珠号的数组，这里的序号是按顺序排列的
        for (let i = 0; i < item.length - 1; ++i) {
          if (item[i + 1] - item[i] < linkNums) {
            ++count;
            break
          }
          if (ballNums - item[item.length - 1] + item[0] < linkNums) {
            ++count;
            break
          }
        }
      })
      console.log(count); //不满足情况的种类
      rl.close()
    }

  })
})





let ballNums,
  linkNums,
  colorNums,
  ballColor = [],
  sameColorBall = [],
  count = 0;

[ballNums, linkNums, colorNums] = readline().split(' ').map(item => Number(item))
let i = 0
ballColor[i] = readline().split(' ').map(item => Number(item))
++i
if (i > ballNums - 1 || bc === 'p') {
  // 收集同一个颜色出现的串珠号
  ballColor.forEach((item, index) => {
    //若该串珠所用的颜色种类大于0
    if (item[0] > 0) {
      let colorArr = item.slice(1)
      colorArr.forEach(color => {
        //如果之前已经保存过使用某种颜色的串珠号，那就直接将其添加到数组中
        if (sameColorBall[color]) {
          sameColorBall[color].push(index + 1)
        } else {
          sameColorBall[color] = [index + 1]
        }
      })
    }
  })
  sameColorBall.forEach(item => {
    // sameColorBall[0] 代表的是使用了'0'这种颜色的所有串珠号的数组，这里的序号是按顺序排列的
    for (let i = 0; i < item.length - 1; ++i) {
      if (item[i + 1] - item[i] < linkNums) {
        ++count;
        break
      }
      if (ballNums - item[item.length - 1] + item[0] < linkNums) {
        ++count;
        break
      }
    }
  })
  console.log(count); //不满足情况的种类
}




