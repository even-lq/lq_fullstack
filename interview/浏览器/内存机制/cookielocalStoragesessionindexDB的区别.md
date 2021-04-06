### cookie/localStorage/sessionStorage/indexDB的区别

1. 大小

   cookie：4K

   localStorage：5M

   sessionStorage：5M

   indexDB：无限（本地硬盘大小）

2. 位置

   cookie：携带在header中，影响请求性能

3. 使用时机

   localStorage：数据不需要经常使用

   sessionStorage：数据需要经常使用

   cookie：

   - key-value形式，
   - 请求中的http-only，不能通过js访问cookie，减少XSS的攻击
   - 请求中的secure，只能在https协议中携带cookie
   - 请求中的sanme-site，不能在跨域请求中携带cookie

   

