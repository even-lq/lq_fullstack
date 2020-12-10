e.currentTarget和target

```text
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

简单看上面的标签，单我们点击 `<li>3</li>` 时，触发事件 e， 这个时候

```text
e.target = <li>3</li>
e.currentTarget= <li>3</li>
```

由于事件冒泡的特性，这个事件 e 是可用被 `<ul>` 捕获的，对于 `<ul>` 这个 e.target 指的依然是触发事件的 `<li>3</li>`，但是这个时候

```text
e.target = <li>3</li>
e.currentTarget= <ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

所以，e.currentTarget 指向捕获事件的对象； e.target 指向发生这个事件的对象

