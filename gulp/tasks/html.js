const gulp = require('gulp')

module.exports = 	gulp.task('html', function () {
	return gulp.src('app/view/**/*.html')
		.pipe(gulp.dest('dist/'))
})