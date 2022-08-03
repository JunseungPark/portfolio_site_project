const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  outputDir: './docs',
  transpileDependencies: true,
  chainWebpack: config => {
      config.module.rules.delete('eslint');
  }
})
