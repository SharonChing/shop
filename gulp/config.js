"use strict";
global.src = './app';
global.dest = './dest';
module.exports = {
	iconfont : {
		fontName : 'iconfont',
		cssTemplate : global.src + '/icons/**/*.scss',
		src : global.src + '/icons/*.svg',
		dest : global.dest + '/fonts'
	},
	html: {
		src: global.src + '/*.html',
		dest: global.dest
	},
	js: {
		src: global.src + '/js/**',
		dest: global.dest + '/js'
	},
	image: {
		src: global.src + '/images/**',
		dest: global.dest + '/images'
	},
	server : './dest',
	css: {
		src: global.src + '/css/**',
		dest: global.dest + '/css'
	}
}
