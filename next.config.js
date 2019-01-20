const webpack = require('webpack')
const withImages = require('next-images')
const withTypescript = require('@zeit/next-typescript')

if (process.env.NODE_ENV !== 'production') {
  require('now-env')
}

module.exports = withImages(withTypescript({
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.OPENEX_API_KEY': JSON.stringify(process.env.OPENEX_API_KEY)
      })
    )
    return config
  }
}))
