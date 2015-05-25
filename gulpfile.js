var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browserify', function(){
  browserify({
    entries: ['./src/main.js'],
    transform: [reactify]
  }).bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('./dist'));
});
