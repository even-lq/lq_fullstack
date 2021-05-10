# React面试题

## 为什么选择使用框架而不是原生JS？

面试官想了解什么？编程素养

思考逻辑：

提词器（答题点，关键点）

1. 组件化

   易于维护，便于分工协作，代码复用

2. MVVM的分层机制

   React：函数式编程

   一切复杂应用都可以分层，降低耦合

   后端MVC

   JSX => V

   state + setState props => M

   - 模板

     只负责rendering

     model 提供状态及状态管理 this.setState this.state = ...

   - VM 数据绑定

3. 开发效率

   UI与状态绑定

4. 性能优化

   主要通过虚拟dom是实现

5. 开发生态多

   比如阿里的antd，elementUI

## 虚拟DOM的本质是什么？

回答逻辑：要说关键点

不能说不自信的词语：好像？应该?

关键点：JavaScript对象，回流/重绘

本质是**JavaScript对象**，存储在内存中，是对真实DOM的抽象

### 虚拟DOM的优点

1. 性能

   原生DOM是最耗性能的

   虚拟DOM可以经过**前后状态（前后两颗虚拟DOM）diff**找出最小差异，批量**patch**（是一个数组patches，打补丁），同步DOM中，减少了DOM操作

2. 无需DOM操作，加快**开发效率**

3. 跨平台

   只要增加了JS引擎解释JavaScript对象，就可以跨平台（React Native => 手机应用/Electron => 桌面应用/SSR服务端渲染 => 有利于SEO）

## React 生命周期

回答逻辑：

1. **生命周期**和哪几个**阶段**联系起来？

   ![React16生命周期](E:\study\StudyProjects\lq_fullstack\js\react\React16生命周期.jpg)

   分成哪几个阶段？

   1. 初始化

   2. 挂载阶段

      - constructor

      - componentWillMount

        不在这请求ajax是为了防止，ajax请求太快而dom没渲染完成的情况

      - render

      - componentDidMount 

        发送ajax请求

        对比vue？

   3. 更新阶段

   4. 卸载阶段

      - 定时器（在EventLoop中，与react内存不在同一块）

      - 在卸载之前阻止数据请求

2. React生命周期的版本变化（16，17）



