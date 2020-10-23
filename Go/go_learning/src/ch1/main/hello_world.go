package main // 包，主程序包 module 模块化

import (
	"fmt"
	// open system
	"os"
)

func main() {
	// 格式输出模块
	// 获取从终端传入的ttt
	// len函数计算从终端传入的参数有多少个
	// 考虑空值，数组越界
	if len(os.Args) > 1 {
 		fmt.Println(os.Args[1])
	}
	fmt.Println("Hello World!")
}

// go build 打包go文件为二进制文件在web端访问

