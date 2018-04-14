var gulp = require('gulp'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect');

var htmlSources = ['*.html'];
gulp.task('connect', function () {
    connect.server({
        livereload:true
    });
});
gulp.task('html', function () {
    gulp.src(htmlSources)
    .pipe(connect.reload())
});

gulp.task('watch', function () {
    gulp.watch(htmlSources, ['html']) 
});

gulp.task('default', ['html', 'connect', 'watch']);