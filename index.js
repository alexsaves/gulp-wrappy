/* jshint node: true */
'use strict';

var es = require('event-stream'),
  gutil = require('gulp-util');

var wrappyPlugin = function(template) {
  template = template || '';
  return es.map(function(file, cb){
    var filecontents = file.contents.toString('utf8'),
      rx = /<%=[^>]*contents[^>]*%>/gi;
    file.contents = new Buffer(template.replace(rx, filecontents));
    cb(null, file);
  });
};

module.exports = wrappyPlugin;
