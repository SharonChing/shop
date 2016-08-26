"use strict";
var gulp = require("gulp");
var config = require("./../config.js").css;
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var errorHandler = require('../utils/error-handler');
var size = require('gulp-size');

gulp.task("css", function () {
  return gulp.src(config.src)
  			.pipe(plumber({errorHandler: errorHandler}))
     //    .pipe(autoprefixer({
	  		// 	//browsers: ['Android 2.3','iOS 6'],
	  		// 	browsers: ["> 0%"],
	  		// 	cascade: false
  			// }))
  			.pipe(size())
  			.pipe(gulp.dest(config.dest));
});
