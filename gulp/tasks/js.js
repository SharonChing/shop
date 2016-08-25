"use strict";
var gulp = require("gulp");
var config = require("./../config.js").js;
gulp.task("js", function () {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
