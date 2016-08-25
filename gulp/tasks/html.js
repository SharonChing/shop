"use strict";
var gulp = require("gulp");
var config = require("./../config.js").html;
gulp.task("html", function () {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
