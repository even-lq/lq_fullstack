const fs = require('fs');
const AipOcrClient =
  require('baidu-aip-sdk').ocr;

const APP_ID = "23512883";
const API_KEY = "811d9bGtKbTgHbPKEGrH7tCz";
const SECRET_KEY = "63pc4n4C7oH7U8G4TRYrGniTNrpAGod1";
// sync  I/O  Async 同步 
const image = fs.readFileSync("car_number.jpg")
  .toString("base64");
// console.log(image);
const options = {};
options["multi_detect"] = "true";

const client =
  new AipOcrClient(APP_ID,
    API_KEY, SECRET_KEY);

client
  .licensePlate(image, options)
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  })