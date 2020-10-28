# weui 源码分析,并用stylus实现

- src dist
  src 源码目录
  dist 遍历后的文件
  weui.style 入口文件

- css框架是70%常见业务
  1. reset 样式重置
  2. stylus 变量是替换关系
    ```stylus
      $weuiFontEN = -apple-system-font, "Helvetica Neue"
      $weuiFontSans = "PingFang SC", "Hiragino SansGB", "Microsoft Yahei"
      $weuiFontDefault = $weuiFontEN, $weuiFontSans
    ```
  3. stylus mixin 完成代码的封装及复用,区别与函数
      函数:有返回值,得到运算结果
      mixin:mixin里面的代码(传参)替换至mixin代码处
      ```css
        setTapColor($c=rgba(0,0,0,0))
        -webkit-tap-highlight-color $c
      ```