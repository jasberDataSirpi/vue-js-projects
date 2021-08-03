// module.exports = {
//     devServer: {
//       proxy: {
//         '^/api': {
//           target: 'http://localhost:8081',
//           changeOrigin: true,
//           logLevel: 'debug',
//           pathRewrite: { '^/api': '/' },
//         },
//       },
//     },
//   }

  module.exports={
    devServer: {
      proxy: 'http://localhost:8081'
    }
  }