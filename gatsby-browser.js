require('highlight.js/styles/default.css')
require('./src/styles/styles.scss')

const highlight = require('highlight.js')

exports.onPreRouteUpdate = () => {
  highlight.highlightAll()
}

exports.onRouteUpdate = () => {
  highlight.highlightAll()
}
