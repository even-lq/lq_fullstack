const fs = require('fs')
const AipImageClassifyClient = require('baidu-aip-sdk').imageClassify;

const APP_ID = "23511198";
const API_KEY = "Nu6hRGsUk5iaTpuuQrsXAcGq";
const SECRET_KEY = "PuIsNc8enACBgVhB6GPGDtv0WLB0SxDs";


// sync 同步，阻塞后面的代码，等待操作完成
// base64表达图片的url格式
const image = fs.readFileSync('car.jpg').toString("base64")
console.log(image);

const client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);
client
   // http 协议
   // 云端 AI sdk
  .carDetect(image)
  .then((res) => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })