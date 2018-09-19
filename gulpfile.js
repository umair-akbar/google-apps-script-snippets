'use strict';
/* global require */
// var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var concat = require('gulp-concat');
var fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function() {
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

gulp.task('docs', function() {
  return gulp
    .src('snippets/*/*.js')
    .pipe(concat('snippets.md'))
    .pipe(gulpJsdoc2md())
    .on('error', function(err) {
      gutil.log('jsdoc2md failed:', err.message);
    })
    .pipe(gulp.dest('snippets'));
});
