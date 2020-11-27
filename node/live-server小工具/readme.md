http：超文本传输协议，固定格式

![请求报文格式](E:\study\StudyProjects\lq_fullstack\node\liver-server小工具\请求报文格式.jpg)
请求行： 方法+sp（空格）+url+sp（空格）+版本+cr（回车）+if（换行）
        如： GET www.baidu.com HTTP/1.1
             user-agent： XXX IE/chrome



响应行：![报文格式](E:\study\StudyProjects\lq_fullstack\node\liver-server小工具\报文格式.jpg)

HTTP/1.1 200 ok

content-type：test/html

key：value



(实体)<html标签>