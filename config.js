path = require('path')

module.exports = {
  entry: "src/index.js",
  html: {
    "title": "Counter",
    "template": path.join(__dirname, 'templates/index.html')
  }
}
