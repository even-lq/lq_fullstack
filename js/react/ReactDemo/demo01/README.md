## demo01

### create-react-app4

可以不引用react来使用jsx语法

### 使用

1. Fragment

   可以使render函数不只有一个根标签	

2. 事件绑定this丢失问题

   在 React 的类组件中，当我们把事件处理函数引用**作为回调**传递过去，如下所示：

   ```react
   <button type="button" onClick={this.handleClick}>Click Me</button>
   ```

   它是`React.createElement`的语法糖，其本质为

   ```react
   class View extends React.Component {
     constructor(props) {
       super(props);
     }
     handleClick(e) {
       console.log(e);
     }
     render() {
       return React.createElement("a",
         {
           onClick: this.handleClick
         },
         "click me");
     }
   }
   
   
   作者：zachrey
   链接：https://juejin.cn/post/6844903589786157063
   来源：掘金
   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
   ```

   this.handleClick回调函数被赋值给onClick事件的参数，实际上等于callback = this.handleClick，被赋予的函数会走默认绑定。

   事件处理程序方法会丢失其**隐式绑定**的上下文。当事件被触发并且处理程序被调用时，`this`的值会回退到**默认绑定**，即值为 `undefined`，这是因为类声明和原型方法是以严格模式运行。

   当我们将事件处理程序的 `this` 绑定到构造函数（公共类字段语法/回调中的箭头函数）中的组件实例时，我们可以将它作为回调传递，而不用担心会丢失它的上下文。

   箭头函数可以免除这种行为，因为它使用的是**词法** `this` **绑定**，会将其自动绑定到定义他们的函数上下文。

   > 作者：saku
   > 链接：https://juejin.cn/post/6844903605984559118
   > 来源：掘金
   > 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

   解决方式：

   - bind
   - 公共类字段语法
   - 回调中的箭头函数
   - constructor内部绑定this（最优解）

3. 避免直接修改state或props数据源

   而是用新的变量来覆盖

   [不可变数据的力量](https://zh-hans.reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data)

   react没有依赖收集
   
   依赖收集：被监听的属性发生修改后主动发起通知

4. 注释

   多行注释

   ` {/* 注释 */}`

   单行注释

   `{// 注释}`

   注意：在一对大括号下写分号即可，不要嵌套大括号，比如以下方式不可取` {{/* 注释 */}}`

### JSX

1. 将state解析成html

   ```react
   <li
       key={index + item}
       onClick={this.deleteItem.bind(this, index)}
       dangerouslySetInnerHTML={{__html:item}}
       >
       {/* {item} */}
   </li>
   ```

2. JSX与原生html/js/css关键字的歧义

   label的for会与for循环的for产生歧义，故label用htmlFor

   css的class与es6的class产生歧义，css用className

3. refs

   为不同的react元素绑定DOM或实例

   > ​	ref 的值根据节点的类型而有所不同：
   >
   > - 当 `ref` 属性用于 HTML 元素时，构造函数中使用 `React.createRef()` 创建的 `ref` 接收底层 DOM 元素作为其 `current` 属性。
   > - 当 `ref` 属性用于自定义 class 组件时，`ref` 对象接收组件的挂载实例作为其 `current` 属性。
   > - **你不能在函数组件上使用 `ref` 属性**，因为他们没有实例。

   用途：

   - 访问dom => 语义化地替代e.target属性

   使用方式：

   - React 16.3 及以后版本： `React.createRef()` API

     ```react
     class CustomTextInput extends React.Component {
       constructor(props) {
         super(props);
         // 创建一个 ref 来存储 textInput 的 DOM 元素
         this.textInput = React.createRef();
         this.focusTextInput = this.focusTextInput.bind(this);
       }
     
       focusTextInput() {
         // 直接使用原生 API 使 text 输入框获得焦点
         // 注意：我们通过 "current" 来访问 DOM 节点
         this.textInput.current.focus();
       }
     
       render() {
         // 告诉 React 我们想把 <input> ref 关联到
         // 构造器里创建的 `textInput` 上
         return (
           <div>
             <input
               type="text"
               ref={this.textInput} />
             <input
               type="button"
               value="Focus the text input"
               onClick={this.focusTextInput}
             />
           </div>
         );
       }
     }
     ```

   - 回调形式的refs

     ```react
     <div>
         <label htmlFor="jspang">增加服务</label>
         <input
             id="jspang"
             className="input"
             value={this.state.inputValue}
             onChange={this.inputChange.bind(this)}
             ref={(input) => {
                 this.input = input;
             }}
             />
         <button onClick={this.addList.bind(this)}>增加服务</button>
     </div>
     ```

     ```react
     inputChange(e) {
         this.setState({
             // inputValue: e.target.value,
             // this.input存储了id为jspang的input的dom
             inputValue: this.input.value,
         });
     }
     ```

### API

#### 函数组件VSClass组件

props相同

函数组件

- 无状态（state）组件

- 只有props，没有私有数据（this）和生命周期

- props只读，不可修改

- **函数式组件捕获了渲染所使用的值**。在函数组件中，之前的props参数，已经因为javascript**闭包**的特性，保存在内存之中，无法从外部进行修改。所以在定时器执行callback时，**打印的还是旧值**。

- 应用：如果一个组件只需要根据外界传递过来的props，渲染固定的页面结构，此时非常适用【无状态组件】

- 优点：没有生命周期，运行速度快

  > **注意**：在`react16.8`版本中添加了`hooks`，使得我们可以在函数组件中使用`useState`钩子去管理`state`，使用`useEffect`钩子去使用生命周期函数。因此，2、3两点就不是它们的区别点。从这个改版中我们可以看出作者更加看重函数组件，而且`react`团队曾提及到在`react`之后的版本将会对函数组件的性能方面进行提升。

Class组件

- 有状态（state）组件

- 有自己的私有数据（this.state）和生命周期
- state可读写
- **类组件捕获最新的值**（永远保持一致）当实例的props属性发生修改时，class组件直接使用this（组件的实例），所以可以直接获取组件最新的props

### 原理

#### 合成事件

![合成事件](E:\study\StudyProjects\lq_fullstack\js\react\合成事件.png)

[React 合成事件和原生事件的区别](https://www.jianshu.com/p/8d8f9aa4b033)

[React合成事件和DOM原生事件混用须知](https://juejin.cn/post/6844903502729183239)