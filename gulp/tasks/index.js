'use strict';

var gulp = require('gulp');
var runSequence = require('gulp-run-sequence');

gulp.task('default', function() {
	runSequence('clean', 'html', 'iconfont', 'watch', 'server');
});
