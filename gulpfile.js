var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
 
gulp.task('bundle', function() {
    gulp.src('./app/main.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('dist'))
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: ['.', '.tmp']
  });
});
 
gulp.task('livereload', function() {
  gulp.src(['.tmp/styles/*.css', '.tmp/scripts/*.js'])
    .pipe(watch('app/*.*'))
    .pipe(connect.reload());
});
 
gulp.task('watch', function() {
  gulp.watch('app/*.*', ['bundle']);
});
 
gulp.task('serve', ['bundle', 'webserver', 'livereload', 'watch']);