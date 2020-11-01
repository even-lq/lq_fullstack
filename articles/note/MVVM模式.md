### MVVM模式

>  [MVC、MVP、MVVM](https://juejin.im/post/6856590487504191501)
>
> [说说MVVM](https://juejin.im/post/6844903849119973389)

1. MVC中view层和model层的耦合度高，model会获取view的数据，并进行数据处理，controller响应视图指令并调用模型

2. MVP则完全分离了model层和view层：

   - Model：**数据模型**和具体业务无关的**数据处理**

   - View：用户界面渲染逻辑

   - Presenter：响应视图指令，同时进行相关业务处理，必要时候获调用 Model 获取底层数据，返回指令结果到视图，驱动视图渲染

   - View 和 Model 完全隔离，Model **不再负责业务逻辑**和**视图变化**，只负责底层数据处理

   - Presenter 接管路由和业务逻辑，但要求 View 实现 View Interface，方便和具体 View 解耦，可以不依赖 UI 进行单元测试

   - View 层只负责发起指令和根据数据渲染 UI，不再有主动监听数据变化等行为，所以也被称之为被动视图

     作者：方凳雅集
     链接：https://juejin.im/post/6856590487504191501
     来源：掘金
     著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

3. MVVM

   View和Model的职责相同，但ViewModel处理视图变化的时候通过**DataBinding** ，并且是双向绑定，响应式更新视图。

   View：显示带有**数据**的视图，绑定UI事件（click等）

   Model：单纯的数据模型，当model的数据变化时会自动同步给View（DataBinding）

   ViewModel：1. 响应UI事件，2. 处理业务逻辑和数据。