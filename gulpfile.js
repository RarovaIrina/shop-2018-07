'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

var path = {
   sass_src: './src/sass/**/*.scss',
   sass_dest: './build/css'
};
 
gulp.task('sass', function () {
  return gulp.src(path.sass_src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.sass_dest));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(path.sass_src, ['sass']);
});
