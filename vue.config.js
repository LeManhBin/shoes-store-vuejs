const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/variables.scss";`, // Đường dẫn tới file SCSS chứa biến
      },
    },
  },
});
