var gulp = require("gulp"),
	browserSync = require('browser-sync').create(),
	minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');     

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("minifycss", function(){
	gulp.src("css/common.css")
		.pipe(minifycss())
		.pipe(rename("common.min.css"))
		.pipe(gulp.dest("css/"));
})