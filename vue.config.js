const {resolve} = require('path')

module.exports ={
    publicPath: './',
    devServer:{
      host:'192.18.2.248'
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
      },
}