var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var connect    = require('gulp-connect');

gulp.task('build', function () {
  browserify({
    entries: 'src/js/main.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(connect.reload())
  .pipe(gulp.dest('dist'));
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
