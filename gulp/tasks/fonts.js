const gulp = require('gulp')

module.exports = 	gulp.task('fonts', function () {
	return gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts/'))
})