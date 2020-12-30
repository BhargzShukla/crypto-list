module.exports = {
  crossorigin: 'anonymous',
  // Proxy required since the Coinranking API doesn't
  // support CORS in their free tier.
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
