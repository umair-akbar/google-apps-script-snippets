'use strict';
/* global require */
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var concat = require('gulp-concat');
var fileinclude = require('gulp-file-include');
var del = require('del');
var exec = require('child_process').exec;
var es = require('event-stream');
var runSequence = require('run-sequence');

gulp.task('fileinclude', function () {
  gulp
    .src(['./templates/README2.md'])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file'
      })
    )
    .pipe(gulp.dest('./'));
});

gulp.task('docs', function () {
  return gulp
    .src('snippets/*/*.js')
    .pipe(concat('docs.md'))
    .pipe(gulpJsdoc2md())
    .on('error', function (err) {
      gutil.log('jsdoc2md failed:', err.message);
    })
    .pipe(gulp.dest('snippets'));
});

gulp.task('br', function (done) {
  // console.log(process.argv[4]);
  var snippet = `${path.normalize(process.argv[4])}/`;
  var config = JSON.parse(fs.readFileSync(path.join(snippet, 'config.json')));
  console.log(snippet);
  del.sync('./dist/');
  var src = [`${snippet}*.js`, `${snippet}*.ts`, `${snippet}*.html`, `${snippet}appsscript.json`];
  var clasp_config = '';
  switch (config.type) {
    case 'standalone':
      clasp_config = './settings/standalone-script-example/.clasp.json';
      break;
    case 'container-bound-sheet':
      clasp_config = './settings/container-bound-sheet-script-example/.clasp.json';
      break;
    default:
      throw new Error('USER CONFIG ERROR: type requeried');
      break;
  }
  if (config.src) src = src.concat(config.src);
  var dest = gulp.dest('./dist');
  var dist = gulp.src(src).pipe(dest);
  var clcfn = gulp.src(clasp_config).pipe(gulp.dest('./'))
  return es.concat(dist, clcfn);
});

gulp.task('clasp', function (cb) {
  cb = cb || console.log;
  exec('./node_modules/.bin/clasp push', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('develop', gulp.series('br', function (done) {
  done();
}));
