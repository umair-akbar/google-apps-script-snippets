var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;

gulp.task('crumbs.build', ['crumbs.app'], function (cb) {
  exec('cd ./Crumbs && gapps push | while read OUTPUT; do notify-send "$OUTPUT"; done', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('crumbs.clean', function () {
  del([
    'Crumbs/app/*'
  ]);
});

gulp.task('crumbs.app', ['crumbs.clean'], function () {
  gulp.src('Crumbs/src/*')
    .pipe(gulp.dest('Crumbs/app'));
});
