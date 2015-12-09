Gulp Wrapper plugin
===================
Lightweight way to wrap your output with some other contents.
###Installation &nbsp;  [![npm version](https://badge.fury.io/js/gulp-wrappy.svg)](http://badge.fury.io/js/gulp-wrappy)
```sh
npm install gulp-wrappy
```
###Simple Usage
```javascript
var wrappy = require("gulp-wrappy");

/**
 * Build JS
 */
gulp.task('js', function () {
  gulp.src(['./src/**/*.js'])
    .pipe(wrappy("function() {<%= contents %>};"))
    .pipe(gulp.dest('./dist/'));
});
```



