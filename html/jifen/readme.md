### 淘宝积分系统

- 模块

  需求文档+设计稿 -> 类 -> 模块 -> 项目 -> 上线+运维

- 设计数据库mysql

- 类设计uml

- 设计原则

- 研究竞品
  - 积分规则

    - 下单

      100￥ = 100京豆

    - 评论
    - 签到

- 仿项目到实现项目 

- 面向对象设计类

  Order与Jifen（增删改查CRUD）的解耦

  积分表

  id 积分记录ID
  user_ id 用户ID
  channel_ id 赚取或消费渠道ID 1下单2 评论
  event_ id 驱动的事件ID
  credit 积分(赚取为正值，消费为负值)
  create_ time
  expired_ time 过期时间
