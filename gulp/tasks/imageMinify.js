const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const tinypng = require('gulp-tinypng-unlimited')
const cache = require('gulp-cache')

module.exports = gulp.task('imageMinifyImagemin', function () {
	return gulp.src('./app/img/**/*.{gif,svg}')
		.pipe(cache(
			imagemin([
				imagemin.gifsicle({
					interlaced: true
				}),
				imagemin.mozjpeg({
					quality: 85,
					progressive: true
				}),
				imagemin.optipng({
					optimizationLevel: 5
				}),
				imagemin.svgo({
					plugins: [{
							removeViewBox: true
						},
						{
							cleanupIDs: false
						}
					]
				})
			])
		))
		.pipe(gulp.dest('dist/img'))
})

module.exports = gulp.task('imageMinifyTinyPNG', function () {
	return gulp.src('./app/img/**/*.{png,jpg,jpeg}')
		.pipe(cache(
			(tinypng({
				outputErrorLog: true,
				outputErrorFiles: true,
			}))
		))
		.pipe(gulp.dest('dist/img'))
})