const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  outputDir: './docs',
  transpileDependencies: true,
  chainWebpack: config => {
    config.module.rules.delete('eslint');
    //svg
    // const svgRule = config.module.rule('svg');

    // svgRule.uses.clear();

    // svgRule
    //   .use('babel-loader')
    //   .loader('babel-loader')
    //   .end()
    //   .use('vue-svg-loader')
    //   .loader('vue-svg-loader');
  }
})
