const tsImportPluginFactory = require("ts-import-plugin");
const { merge } = require("webpack-merge");

module.exports = {
  chainWebpack(config) {
    // 配置VantUI按需引入
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });
  },
  devServer: {
    disableHostCheck: true
  }
};
