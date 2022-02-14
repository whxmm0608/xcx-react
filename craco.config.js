/* craco.config.js */

const CracoAntDesignPlugin = require("craco-antd");
const CracoAlias = require("craco-alias");

const path = require("path");
module.exports = {
  // webpack: {
  //   // 别名
  //   alias: {
  //     "@": path.resolve("src"),
  //     "@utils": path.resolve("src/utils"),
  //   },
  // },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@": path.resolve("src"),
          "@utils": path.resolve("src/utils"),
        },
      },
    },
    {
      plugin: CracoAntDesignPlugin,
      options: {
        //customizeTheme is just an alias for the modifyVars option in less-loader.
        customizeTheme: {
          // "@primary-color": "#1DA57A",
          // "@link-color": "#1DA57A",
        },
        customizeThemeLessPath: path.join(
          __dirname,
          "src/style/AntDesign/customize.less"
        ),
      },
    },
  ],
};
