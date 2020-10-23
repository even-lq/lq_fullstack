## 带你理解transform：rotate（含三维视图）

### 前言

最近在练习的时候常常需要使用CSS3属性transform：rotate，到底X轴，Y轴，Z轴**如何旋转的**，纠结了半天，终于还是实践得真知，写下这篇文章希望可以帮助大家，如果有说错的地方欢迎指正，欢迎补充，欢迎交流

> 关于rotate的基本使用本文不多赘述，不认识这个属性的朋友可以先看W3C对该属性的介绍
>
> 本文主要谈谈对该属性旋转的理解
>
> 参考[从css 3d说到空间坐标轴](https://www.cnblogs.com/zhangnan35/p/10709876.html)

首先我们从**人体的角度**感性层面来理解这三个轴

### 1. 感性层面理解

#### 1.1 X轴

![X轴](E:\study\StudyProjects\lq_fullstack\articles\note\rotate\X轴.gif)

X轴的旋转好比人在平地不停地**后空翻**

#### 2.2 Y轴

![Y轴](E:\study\StudyProjects\lq_fullstack\articles\note\rotate\Y轴.gif)

Y轴的旋转好比人在平地不停地**转身**（不说转圈是因为怕引起歧义）

#### 2.3 Z轴

![Z轴](E:\study\StudyProjects\lq_fullstack\articles\note\rotate\Z轴.gif)

是不是很像飞行员的训练项目？

![飞行员训练项目](E:\study\StudyProjects\lq_fullstack\articles\note\rotate\飞行员训练项目.jpg)

### 2. 理想层面理解

有了上面的认识之后接下来就好理解了，我们先来看由这三条轴构成的三维坐标图

![三维坐标图](E:\study\StudyProjects\lq_fullstack\articles\note\rotate\三维坐标图.jpg)

我们再来把刚才的旋转代入到这个坐标中，是不是很好理解了。仔细的读者会注意到我增加的角度一直是**正数**，其实旋转的正角度和负角度是有规则的，看到一些文章指出，当rotate的值为正时，各轴按顺时针旋转，反之按逆时针旋转，根据我的实验，其实是错误的，由于官方没有对此相应的描述，这里我们可以使用**左手螺旋法则**（还记得物理学过的右手螺旋法则吗，哈哈）

> ​	**伸出左手，大拇指指向正轴方向，四个手指的指向即是旋转正向，但务必记住是左手！**

这里要强调两点：**左手**，**正轴**

一定要是使用**左手**的大拇指指向**正轴的方向**，我们才可以得到旋转的**正向**（旋转角度为正的方向）

### 3. C4D三维空间视图

这里用C4D建模工具为读者展示三维XYZ轴的旋转

我们分别在各轴旋转正的60度，效果如图所示（**X**轴是**红**轴，**Y**轴是绿轴，**Z**轴是蓝轴）

```css
transform: rotateX(60deg) rotateY(60deg)  rotateZ(60deg);
```

![C4D_rotate](E:\study\StudyProjects\lq_fullstack\articles\note\rotate\C4D_rotate.gif)