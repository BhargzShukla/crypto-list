module.exports = {
  crossorigin: 'anonymous',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.coinranking.com/v2',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true,
        secure: false
      }
    }
  }
}
