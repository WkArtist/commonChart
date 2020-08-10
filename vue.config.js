module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/assets/styles/theme.scss";
            @import "@/assets/styles/box.scss";
        `
      }
    }
  }
}
