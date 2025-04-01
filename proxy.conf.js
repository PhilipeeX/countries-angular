module.exports = {
  '/api': {
    target: 'https://restcountries.com',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/v3.1'
    },
    logLevel: 'debug'
  }
};
