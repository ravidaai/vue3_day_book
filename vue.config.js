// module.exports ={
//     devServer:{
//         // proxy:{
//         //     '^/api':{
//         //         target: 'http://localhost:5000',
//         //         changeOrigin: true,
//         //         loglevel: 'debug',
//         //         pathRewrite: {'^/api':'/'}
//         //     }
//         // }
//         proxy: 'http://localhost:3000'
//     }
// }

module.exports = {
    devServer: {
      port: 8080
    },
    configureWebpack: {
      devtool: 'source-map'
    }
  }