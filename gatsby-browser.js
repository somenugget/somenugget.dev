require('highlight.js/styles/default.css')
require('./src/styles/styles.scss')

const highlight = require('highlight.js')

exports.onRouteUpdate = () => {
  highlight.highlightAll()
}
