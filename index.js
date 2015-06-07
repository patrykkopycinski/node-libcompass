var path = require('path');

function includePaths() {
  return [path.join(__dirname, 'node_modules/compass-mixins/lib')];
}

module.exports = {

  includePaths: includePaths(),

  with: function() {
    var paths  = Array.prototype.slice.call(arguments);
    var result = [].concat.apply(includePaths(), paths);
    return result;
  }

};
