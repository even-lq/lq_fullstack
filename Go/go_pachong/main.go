// 爬虫
package main

import (
  "net/http"
	"log"
	"github.com/PuerkitoBio/goquery"
	"fmt"
)
func BaiduHotSearch() {
	// http 请求网页
	// dom内存第三方分析
	// find
	// 同步写法写异步代码
	res, err := http.Get(
		"http://www.baidu.com")
	// nil是预定义的标识符，代表指针、通道、函数、接口、映射或切片的零值
	if err != nil {
		// 将错误信息进行日志输出，并退出程序
		log.Fatal(err)
	}
	// defer是Go语言中的延迟执行语句，用来添加函数结束时执行的代码，常用于释放某些已分配的资源、关闭数据库连接、断开socket连接、解锁一个加锁的资源
	defer res.Body.Close() // 关闭http.Get 等请求的 TCP 连接（响应体）
	if res.StatusCode != 200 {
		// 在fatal打印的信息中添加占位符
		log.Fatalf("status code err:%d %s", res.StatusCode, res.Status)
	}

	doc, err := goquery.NewDocumentFromReader(res.Body)  // 返回了一个*Document和error。Document代表一个将要被操作的HTML文档。
	if err != nil {
		log.Fatal(err)
	}
	// i: 下标，s: 每个元素
	doc.Find(".s-hotsearch-content .hotsearch-item").Each(func(i int, s *goquery.Selection) {
    content := s.Find(".title-content-title").Text()
    fmt.Printf("%d: %s\n", i, content)
  })
}
func main() {
	BaiduHotSearch() // 模块化
}