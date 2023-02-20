require('highlight.js/styles/default.css')
require('./src/styles/styles.scss')

const highlight = require('highlight.js')

exports.onPreRouteUpdate = ({ location, prevLocation }) => {
  console.log(document.querySelectorAll('code[class]'))
  highlight.highlightAll()
}

exports.onRouteUpdate = () => {
  highlight.highlightAll()
}
