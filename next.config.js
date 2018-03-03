let mdPages = require('./static/data/exportPathMap');

// next.config.js
module.exports = {
  exportPathMap: function() {
    mdPages['/'] = { page: '/' };
    return mdPages;
  }
}
