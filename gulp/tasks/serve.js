const gulp = require('gulp')
const browserSync = require('browser-sync').create()

module.exports = 	gulp.task('serve', function (cb) {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	})
	gulp.watch("app/view/**/*", gulp.series("html")).on('change', browserSync.reload);
	gulp.watch("app/styles/**/*", gulp.series("styles:main", cb => gulp.src('dist/css').pipe(browserSync.stream()).on('end', cb)));
	gulp.watch("app/styles/**/*", gulp.series("styles:libs", cb => gulp.src('dist/css').pipe(browserSync.stream()).on('end', cb)));
	gulp.watch("app/js/**/*", gulp.series("js:main")).on('change', browserSync.reload);
	gulp.watch("app/js/**/*", gulp.series("js:libs")).on('change', browserSync.reload);

	return cb
})