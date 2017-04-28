var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;

gulp.task('crumbs.build', ['crumbs.src'], function (cb) {
  exec('cd ./Crumbs && gapps push | while read OUTPUT; do notify-send "$OUTPUT"; done', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('crumbs.clean', function () {
  del([
    'Crumbs/src/*'
  ]);
});

gulp.task('crumbs.src', ['crumbs.clean'], function () {
  gulp.src('Crumbs/app/*')
    .pipe(gulp.dest('Crumbs/src'));
});
