package try_test

import "testing"

// 以大写字母开头的函数可以被外部调用
// *指针 testing语言测试框架中的测试模块.T 
func TestFirstTry(t *testing.T) {
	t.Log("My first try!")
}

// go test -v test文件
//  该命令会直接调用以Test开头的文件