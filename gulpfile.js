var fileinclude = require('gulp-file-include'),
  gulp = require('gulp');

gulp.task('fileinclude', function () {
  gulp.src(['./templates/README2.md'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});