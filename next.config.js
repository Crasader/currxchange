const webpack = require('webpack')
const withTypescript = require('@zeit/next-typescript')

if (process.env.NODE_ENV !== 'production') {
  require('now-env')
}

module.exports = withTypescript({
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.OPENEX_API_KEY': JSON.stringify(process.env.OPENEX_API_KEY)
      })
    )
    return config
  }
})
