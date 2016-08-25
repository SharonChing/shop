"use strict";
var gulp = require("gulp");
var config = require("./../config.js").image;
gulp.task("image", function () {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
