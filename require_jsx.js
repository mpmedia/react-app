var fs          = require('fs');
var reactTools  = require('react-tools');

if (!require.extensions['.jsx']) {

  require.extensions['.jsx'] = function(module, filename) {
    var src = fs.readFileSync(filename, {encoding: 'utf-8'});
    var compiled = reactTools.transform(src);
    return module._compile(compiled, false);
  };
}
