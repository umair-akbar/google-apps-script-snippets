'use strict';
/* global require */
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;
var ms = require('merge-stream');

gulp.task('br', function(done) {
  // console.log(process.argv[4]);
  var snippet = `${path.normalize(process.argv[4])}/`;
  var config = JSON.parse(fs.readFileSync(path.join(snippet, 'config.json')));
  console.log(snippet);
  del.sync('./dist/');
  var src = [
    `${snippet}*.js`,
    `${snippet}*.ts`,
    `${snippet}*.html`,
    `${snippet}appsscript.json`
  ];
  var clasp_config = '';
  switch (config.type) {
    case 'standalone':
      clasp_config = './settings/standalone-script-example/.clasp.json';
      break;
    case 'container-bound-sheet':
      clasp_config =
        './settings/container-bound-sheet-script-example/.clasp.json';
      break;
    default:
      throw new Error('USER CONFIG ERROR: type requeried');
  }
  if (config.src) src = src.concat(config.src);
  var dist = gulp.src(src).pipe(gulp.dest('./dist'));
  var clcfn = gulp.src(clasp_config).pipe(gulp.dest('./dist'));
  return ms(dist, clcfn);
});

gulp.task('clasp', function(cb) {
  cb = cb || console.log;
  exec('./node_modules/.bin/clasp push', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('develop', gulp.series('br'));
