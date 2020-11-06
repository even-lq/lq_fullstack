# 学习系统
- 需求——OA（办公系统）
  1. 学生信息管理
    - 存储同学信息（github账户），同学信息登录及完善系统：原型设计表单：小piu
    - 照片上传功能：云开发文件上传
  2. 权限区分（admin/stuAdmin/teacher/student/tryStudent）
    user _id uid(学号 10000) can_waibao
    pro pro_num has_resume has_job pratice_company payment contribution（内推，荣誉）
    class cid,cname
    数据库字段：role：-1，1，2，3，4，5，6 数字越大，权限越大
  3. 运营：试听，邀请，分享：[生成长图](https://juejin.im/post/6844903663840788493)
  4. 学习跟进系统
    - github 提交：图 => 爬虫或者github接口
      https://github.com/even-lq => 图片
      主动提交
      1. 每个人都有一张图，新的覆盖旧的：gitPic_id,url,uid
      2. ts 最后更新时间
      3. 列表 班级
    - 文章(url)
      articles _id uid title desc release_time is_top like_num(点赞数如何计算？)
    - 项目
    - leetcode 同GitHub
    - 外包：即时计件，倒计时 提交代码记录，付费记录，开源出去
- 项目形式
  1. 小程序 用户端：微信/QQ小程序
    vant + 云开发
  2. PC端 后台管理系统
    Vue + ElementUI
    分班级 分页 列表 详情
