## BEM命名规范

> 参照[[规范] CSS BEM 书写规范](https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-[%E8%A7%84%E8%8C%83]--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)和[BEM思想之彻底弄清BEM语法](https://www.w3cplus.com/css/mindbemding-getting-your-head-round-bem-syntax.html)，以[WeUi](https://weui.io/)的list为例简述BEM命名规范
>
> ```css
> <div class="weui-cells">
> 
> 	<a class="weui-cell  weui-cell_access" href="javascript:">
> 		<div class="weui-cell__bd">
> 			<p>cell standard</p>
> 		</div>
> 		<div class="weui-cell__ft">
> 		</div>
> 	</a>
> 
> 	<a class="weui-cell  weui-cell_access" href="javascript:">
> 		<div class="weui-cell__bd">
> 			<p>cell standard</p>
> 		</div>
> 		<div class="weui-cell__ft"></div>
> 	</a>
> 
>  </div>
> ```

BEM即块（block）、元素（element）、修饰符（modifier）

我们以三种符号表示它们的关系

1. \- 单横杠：只有一个横杠时，仅作为连字符时候，用于连接某个块或某个子元素或修饰符的多单词之间的连接记号。如 ``.weui-loading``
2. _ 单下划线：表示一个块的状态 ，如 ``.weui-cell_access``
3. __双下划线：表示块的子元素，如  .weui-cell\_\_bd
4. -- 双横杠：块子元素的状态

### 一、块（block）

​	一个块代表一个web组件，具有语义化的特点，通常还会加上**命名空间**

​	例如，``.weui-btn``  btn为块名，用连字符``-``连接命名空间``weui``

- 基本原则
  - CSS中只能使用类名（不能是ID）。
  - 每一个块名应该有一个命名空间（前缀）
  - 每一条CSS规则必须属于一个块。

### 二、元素（element）

​	块的子元素，块的类名必须用父级块的名称作为前缀

​	例如，块``.weui-cell``的子元素 bd 表示为 ``weui-cell__bd``

### 三、修饰符（modifier）

​	修饰符（_ 和--）表示块或块子元素的状态，表示块或块子元素的不同形态或者状态

​	例如，`` weui-cell_access ``和```weui-btn_disabled```

​	（**WeUI**使用的是单下划线   ``_``  表示状态，也有别的项目使用双横杠  ``--``  来表示状态）

### 四、使用范围

​		面向对象的思想来使用BEM，一个块可以看作一个可复用的对象，块里的子元素不能单独使用，必须和父元素关联，作为整体来使用；如果某个元素的组成部分很少（不称之为组件），甚至是单个元素，则不必用BEM。

​	

