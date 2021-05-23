# react-typescript

todo-list——typescript项目

## 项目配置

```js
npx create-react-app todos-ts --template typescript
yarn add classnames // 在组件中使用多动态类名
```

业务库

style-component

moment格式化时间

lodash常用方法

## 项目流程

1. 定义todos接口或类型

   - 

   - todo元组，类型组

   - promise约定todos泛型

2. id唯一性

   symbol/时间戳/`Math.random`/

3. content
4. 状态

## 为什么要用react-hook？

1. 不需要写class，函数式编程

2. class组件不太好复用，函数式组件拥有了状态，便于复用

3. `useEffect`/`useState`

   不再存在this丢失的问题（class组件要bind）

   useEffect承接了react繁杂的生命周期

## 项目

1. 约定

type与interface的区别

// todos.map((todo, index) => {

​      //  return (

​      //   <li>



​      //   </li>

​      //  )

​      // })

1. TS可以加快我们开发效率

   

2. 严格的类型校验，少出错
3. 有了强类型，代码风格更加友好