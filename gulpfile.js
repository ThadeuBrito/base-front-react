var gulp       = require('gulp');
var connect    = require('gulp-connect');
var webpack    = require('gulp-webpack');

gulp.task('build', function() {
  return gulp.src('src/js/main.jsx')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(connect.reload())
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
  connect.server({
    port: 3000,
    root: 'dist',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default'])
});

gulp.task('default', ['build', 'copy']);
gulp.task('server', ['default', 'connect', 'watch']);
