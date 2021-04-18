import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

// JSX: JavaScript + XML 构建虚拟dom 遇到<符号 解析成html 遇到{ 解析成JavaScript
// 自定义组件必须大写，不能是app
ReactDom.render(<App/>, document.getElementById('root'))