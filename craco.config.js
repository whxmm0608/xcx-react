/* craco.config.js */
const CracoLessPlugin = require("craco-less");
const path = require('path');
module.exports = {
  webpack: {
    // 别名
    alias: {
      "@": path.resolve("src"),
      "@utils": path.resolve("src/utils"),
    },
  },
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }], //装饰器
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true, //设置为true即是less
        },
      ],
      // todo：antd按需引入，高级优化技巧，待完成
      // {
      //   plugin: CracoLessPlugin,
      //   options: {
      //     lessLoaderOptions: {
      //       lessOptions: {
      //         modifyVars: { "@primary-color": "#1DA57A" },
      //         javascriptEnabled: true,
      //       },
      //     },
      //   },
      // },
    ],
  },
};
