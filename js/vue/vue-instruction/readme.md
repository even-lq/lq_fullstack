v-if/v-else：不显示是dom结构不存在，display设置为none

v-show：不显示时保留dom结构，css设置为none，可用于操作频繁显示消失的dom

v-text="data里面的数据"等同{{}}语法：

与{{}}的区别：v-text会在vue加载完后显示，不会出现闪动效果，而{{}}是静态数据，在网络状态不好的情况下来不及解析{{}}语法

v-html="data里面的数据"

两者区别text纯文本，html装载标签

v-model双向绑定

v-bind动态改变属性

v-pre跳过vue的模板编译，输出原貌

v-cloak在vue渲染完指定的dom后展示

v-once只显示第一次

