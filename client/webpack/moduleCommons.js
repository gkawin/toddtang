const development = process.env.NODE_ENV === 'development'

module.exports = [
  {
    test: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: development ? '[path][name].[ext]' : 'asserts/[hash].[ext]',
        }
      }
    ]
  },
  {
    test: /\.(css)$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.json/,
    loader: 'json-loader'
  }
]
