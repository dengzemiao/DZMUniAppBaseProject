module.exports = {
  devServer: {
		disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://api.video.test.netjoy.com',
        changeOrigin: true,
				secure: false,
				ws: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}