### Object.defineProperty(obj, prop, descriptor)

在一个对象(obj)上定义一个新属性或修改它的某个属性(prop)并返回该对象

descriptor：描述符，将被定义或修改的属性的描述符，必须是数据描述符或存取描述符，并且不能不写（不需要时要写{}）

数据描述符：value, writable

属性描述符：enumerable, configurable

存取描述符：get, set

configurable：是否可配置，设置为false变为不可删除

#### get

取值的方法

无getter，get的值就是undefined，有则作为属性值

#### set

setter，设置属性值

被监听的 新增 属性如果没有set方法则不能被修改

被监听的 原有 属性如果没有set方法和get方法，则不会执行set和get，属性值可以被修改

如果 有get方法 没set方法，则set无效，get时返回get执行的结果

如果 有set方法 没get方法，则执行set，但是由于没有get，无法通过get获取set后的值