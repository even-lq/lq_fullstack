# CSS4？浅谈CSS模块新样式

> 本人前端小白，引入此文详细介绍[为什么不会有CSS4？](https://juejin.im/entry/6844903625353854989#toc-ac8)CSS规范的更新。这里稍作引入以使读者了解CSS模块规范：
>
> “从CSS3开始，CSS规范就被拆成众多模块（module）单独进行升级，或者将新需求作为一个新模块来立项并进行标准化。因此今后不会再有CSS4、CSS5这种所谓大版本号的变更，有的只是CSS某个模块级别的跃迁。”

下面介绍一些CSS模块的新样式（部分为草案阶段，未实施），以作抛砖引玉，如有错误，欢迎指正，欢迎交流。

### [WD]CSS 属性与值 API Level 1

该模块制定的阶段为工作草案阶段（WD），最新更新的日期为2020/10/13

####  1. ``var()``函数

该函数可以用**自定义属性**来替换属性中的**值的部分**

语法格式如下：

> ```css
> var() = var( <自定义属性名> [, <声明值> ]? )
> ```

<自定义属性名>：名称以两个破折号开头的任何有效标识符，比如``--foo``

<声明值>：声明值也称为回退值，跟自定义属性名直接以逗号隔开，当自定义属性失效时，取声明值作为属性值。如``var(--foo, red, blue)``

常规用法：

> ```css
> /* 后备值 */
> 
> /* 在父元素样式中 */
> .component {
>   --text-color: #080; /* header-color 并没有被设定 */
> }
> 
> /* 在 component 的样式中： */
> .component .header {
>   color: var(--header-color, blue); /* 此处 color 被回退到 blue */
> }
> 
> .component .text {
>   color: var(--text-color, black);
> }
> ```

##### :star:新增：自定义注册属性值的相互替换。

例如：

> ```css
> div {
>   font-size: 10px;
>   --x: 8em;
>   --y: var(--x);
> }
> ```
>
> 注：上例中的``--x``应为有效的<length>长度语法



代码：

```css
.box {
    font-size: 10px;
    --x: 8em;
    --y: var(--x);
}
.box .long-box {
    background-color: #ffc;
    height: var(--x);
}
.box .short-box {
    background-color: #fcf;
    height: var(--y);
}
```

```html
<div class="box">
    <div class="long-box">我是长盒子</div>
    <div class="short-box">我是--x定义的长盒子</div>
</div>
```



效果：![var()](D:\Desktop\properties and values\var().png)

![check var()](D:\Desktop\properties and values\check var().png)

#### 2. （未实施）:star:新增：``@property``规则

@property规则在样式表中直接表示注册的自定义属性，而不需要运行任何JS（代替[CSS.registerProperty](https://developer.mozilla.org/zh-CN/docs/Web/API/CSS/RegisterProperty)方法）

语法格式如下：

> ```css
> @property <自定义属性名> {
>   <声明列表>
> }
> ```



<自定义属性名>：同var()一致

<声明列表>：

1. （必需）syntax：指定自定义属性值的类型格式为“<类型>” ，其值为<string>
2. （必需）inherits：指定由@property规则表示的自定义属性注册的继承标志，控制该属性在默认情况下是否继承，其值为true 或false
3. （可选）initial-value：指定自定义属性的初始值，类型应与syntax指定的类型相同

例如：使用``@property``规则去注册一个属性

> ```css
> <style>
>   @property --my-color {
>       syntax: '<color>',
>       inherits: false,
>       initialValue: '#c0ffee',
>   }
>    .registered {
>       --my-color: #c0ffee;
>       background-image: linear-gradient(to right, #fff, var(--my-color));
>       transition: --my-color 1s ease-in-out;
> 	}
> </style>
> ```

笔者认为该规则等同于CSS.registerProperty()，相比于var()可以更加规范自定义属性的使用，@property提供了syntax类型约束，可以有效规范自定义属性乱传值的情况（不过话又说回来，如果是你自己自定义的应该不会乱传吧......自定义属性除了用来“封装”一些公共的样式还有别的用途吗？）



