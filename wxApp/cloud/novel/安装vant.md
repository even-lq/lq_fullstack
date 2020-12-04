在miniprogram下

1. `npm init -y`
2. `npm i @vant/weapp -S --production`
3. 将 app.json 中的 `"style": "v2"` 去除
4. 不用修改 project.config.json，因为`package.json`在`miniprogram`里面
5. 构建npm包
6. 勾选使用npm模块