### IKcamp

1. Array.from()把类数组强制转换为数组

2. ...   arr.push(...this.createDate())数组元素解构

      把数组内的元素一个一个放进一个新数组（arr）

3. 小程序采用border-box盒模型

4. 工具utils文件夹下的index.js作为整个utils的入口

5. log() {

      此法用来替代if判断，&&前面的为假则不会执行&&后面的语句

        this.isDev && console.log(...arguments);

       }

      如：var a=5,b='';

      b=a>10&&'a大于10'||'a小于10';

      因为使用“&&”如果前面不为真的时候直接跳到“||”

6. this.isDev 为什么要判断产品环境

7. let {url, data, header, method, dataType, mock = false} = option

      对象解构，结构option对象，可直接使用属性名（如url）获取值

8. Mock[url]

