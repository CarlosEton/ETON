module.export = {
  devServer: {
    port: 8485,
    open: true
    // proxy
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import"@/assets/scss/_variable.scss";`
      }
    }
  }
}
