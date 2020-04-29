const gulp = require('gulp')
const browserSync = require('browser-sync').create()

module.exports =  gulp.task("watch", function () {
 	gulp.watch("app/view/**/*", gulp.series("html")).on('change', browserSync.reload);
 	gulp.watch("app/styles/**/*", gulp.series("styles")).on('end', browserSync.reload);
 	gulp.watch("app/js/**/*", gulp.series("js")).on('change', browserSync.reload);
 })