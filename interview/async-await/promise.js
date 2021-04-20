const { reject } = require("async")

const p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
    }, 500);
  })
}

p.then(res => console.log(res))