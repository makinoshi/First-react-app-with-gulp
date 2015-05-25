var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var reactify = require('reactify');
var uglify = require('gulp-uglify');

gulp.task('browserify', function(){
  browserify({
    entries: ['./src/main.js'],
    transform: [reactify]
  }).bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('./src/*.js*', ['browserify']);
});
