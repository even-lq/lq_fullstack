package fib
// 运行测试文件

import (
	"testing"
)

// 斐波那契数列 1,1,2,3,5,8....每个数是前两个数之和
func TestFivList(t *testing.T)  {
	// var a int = 1
	// var b int = 2

	// var (
	// 	a int = 1
	// 	b int = 1
	// )
	

	// 声明变量且赋值
	a := 1
	b := 1
	t.Log(a)
	for i := 0; i < 5; i++ {
		t.Log(" ", b)
		tmp := a
		a = b
		b = tmp + a
	}
}

