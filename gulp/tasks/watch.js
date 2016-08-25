'use strict';

var gulp = require('gulp');
var config = require('./../config');

gulp.task('watch', ['css', 'image', 'js'], function() {

	gulp.watch(config.html.src, ['html']);
	gulp.watch(config.css.src, ['css']);
	gulp.watch(config.image.src, ['image']);
  gulp.watch(config.js.src, ['js']);
	gulp.watch(config.iconfont.src, ['iconfont']);

});
