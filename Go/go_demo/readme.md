go环境变量配置
go env -w GO111MODULE=on  go模块化配置
go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct  go第三方源的代理：阿里云



web API

go + node+ docker + k8s

第三方库

node爬虫：cherrio html -> 内存dom



go mod init github.com/even-lq/lq_fullstack/tree/main/Go/go_demo     go模块初始化命名空间，方便拉取GitHub上go的第三方库

go.mod 当前项目下的模块化文件，更加github化



模块层级

函数模块 -> 文件模块 -> 项目模块

go get -u github.com/PuerkitoBio/goquery  远方dom内存库