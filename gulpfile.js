var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var server = require('gulp-server-livereload');

gulp.task('build', function () {
  browserify({
    entries: 'src/js/main.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));

  // Copy
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(server({
      livereload: true,
      open: true,
      defaultFile: 'index.html'
    }));
});

gulp.task('default', ['build']);
gulp.task('server', ['build', 'webserver']);
