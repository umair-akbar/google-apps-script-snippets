'use strict';
const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const del = require('del');
const exec = require('child_process').exec;
const ms = require('merge-stream');

gulp.task('br', function(done) {
  console.log(process.argv[4]);
  console.log('process.argv', process.argv);
  const snippet = `${path.normalize(process.argv[4])}/`;
  const config = JSON.parse(fs.readFileSync(path.join(snippet, 'config.json')));
  console.log(snippet);
  del.sync('./dist/');
  let src = [
    `${snippet}*.js`,
    `${snippet}*.ts`,
    `${snippet}*.html`,
    `${snippet}appsscript.json`
  ];
  let claspConfig = '';
  switch (config.type) {
    case 'standalone':
      claspConfig = './settings/standalone-script-example/.clasp.json';
      break;
    case 'container-bound-sheet':
      claspConfig =
        './settings/container-bound-sheet-script-example/.clasp.json';
      break;
    default:
      throw new Error('USER CONFIG ERROR: type requeried');
  }
  if (config.src) src = src.concat(config.src);
  const dist = gulp.src(src).pipe(gulp.dest('./dist'));
  const clcfn = gulp.src(claspConfig).pipe(gulp.dest('./'));
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

gulp.task('develop', gulp.series('br', 'clasp'));

gulp.task('watch', function() {
  gulp.watch(
    ['./{snippets,extra,shims}/**/*.{js,gs,json,html}'],
    gulp.series('br', 'clasp')
  );
});
