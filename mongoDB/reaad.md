www是web服务 位于3000端口

mongodb是存储服务 位于27017端口

mysql位于3306端口

:3000 端口给后端使用 node + go

:27017 数据库服务

### [MONGODB基本命令用](https://www.cnblogs.com/liyonghui/p/mongodb.html)

mongodb可以直接存json，没有太严格的关系定义，定义的字段可有可无

1. 启动mongodb

   mongo

2. 在mongo命令下

   show dbs; 展示所有数据库

   use tutorial; 使用tutorial数据库

   db.users.insert({username: '阿汤哥'}); 在users表中插入字段

3. show collections 查看所有数据集（表）

4. db.users.find() 查找users的所有字段

   db.users.find().pretty(); 返回格式化的字段

   db.users.find({"username":"阿汤哥"});  条件查询

   db.users.find({
   ... $and:[
   ... {_id:ObjectId("60014e583abd9213cbef50f6")},
   ... {username: 'jones'}
   ... ]
   ... });多个条件查询（... 为换行的标志，换行后会出现 ...）

   db.users.drop(); 删除表

5. 查找ObjectId

   db.users.find({ _id: ObjectId("60014e3d3abd9213cbef50f5")});

6. 更新

   db.users.update(
   ... {username: 'smith'},
   ... {$set:{country:'canada'}}
   ... );

7. for(i=0;i<20000;i++) {db.numbers.save({num:i})}

   循环插值

8. 表的查询性能分析

   db.numbers.find({num:500}).explain("executionStats");

9. 索引

   mysql关系型数据库，mongodb文档型数据库都有学习，mongodb对js特别友好，可以用json存就好了，对索引进行过学习，在numbers表中右20000条字段（num从1到20000），查询num500用索引优化

   为num创建索引

   db.numbers.createIndex({num:1});

