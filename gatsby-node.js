const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'src/components': path.resolve(__dirname, 'src/components')
      }
    }
  })
}
