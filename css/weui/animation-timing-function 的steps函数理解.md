## animation-timing-function 的steps函数理解

###  一、概述

实际上 `animation-timing-function `的 function 指的是 ``steps()`` 和 ``cubic-bezier()`` 即贝塞尔曲线函数这两个函数，像 linear，ease 这些值其实是  `cubic-bezier() `函数的特殊值， ``steps()``函数同样也有两个特殊值： `step-start `和 `step-end `。在了解这些前提后，下面来具体分析 ``steps()`` 函数的作用。

### 二、理解

> **animation-timing-function**：规定动画的速度曲线。

我理解的是：描绘动画从开始到结束的**播放形式**

1. cubic-bezier( ) 连贯式

   cubic-bezier( ) 的取值如linear,ease,ease-in等会帮助我们在关键帧（在 @keyframes 中定义关键帧）之间**补帧**使其成为**流畅**的动画

2. steps() 跳跃式

   > steps(<number_of_steps>，<direction>) 

   把动画分成自定义数量的帧数，然后一帧一帧的播放

   - number

     正整数，自定义动画播放的帧数

   - direction

     只有两个取值：**start**和**end**

     - start

       表示动画的状态会在每个周期的**起始点瞬间**完成变化

       例如，steps(4, start)，动画会在每个周期起始点也就是 0s ，1s ，2s ，3s 处发生变化，然后在 3s 后达到终点，在终点待了 1s 到动画结束，回到起始位置。

       综上，start在动画结束时保留动画**结束帧（看不到开始）**

     - end

       表示动画的状态会在每个周期的**结束点瞬间**完成变化

       例如，steps(4, end)，动画在 1s ，2s ，3s ，4s 处发生变化。在 4s 动画移动到终点的瞬间由于动画结束的原因又移动到起始位置，所以会产生动画好像没有到达终点的错觉。

       综上，end在动画结束时保留动画**开始帧（看不到结束）**

​		