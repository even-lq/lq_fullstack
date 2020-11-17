### 新手指引

#### z-index

在z轴重叠的情况下调整z轴上的元素显示的顺序

形成层叠上下文才能控制z-index：

1. position：不为static
2. 以下值不为none：
   - transform
   - filter

#### `getBoundingClientRect()`

获取元素的几何信息

#### {}对象结构

`let { left, bottom } = ele.getBoundingClientRect()`

#### 细节补充

1. 容器设置宽高100%没有效果考虑相对于body设置绝对定位
2. 蒙层：`position: absolute;  left: 0;  top: 0;`
3. 如果不设置元素的bgc，则元素默认的bgc透明
4. `relative`相对于自身进行定位

#### `position: absolute` 相对于它的**包含块**进行定位

[包含块](https://developer.mozilla.org/zh-CN/docs/Web/CSS/All_About_The_Containing_Block)



