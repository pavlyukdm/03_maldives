const gulp = require('gulp')
const sass = require('gulp-sass')
const cleancss = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const shorthand = require('gulp-shorthand')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')

module.exports = 	gulp.task('styles:main', function () {
	return gulp.src('app/styles/styles.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('dist/css/'))
		.pipe(shorthand())
		.pipe(cleancss({
			level: {
				2: {
					all: true,
					removeUnusedAtRules: false
				}
			}
		}))
		.pipe(sourcemaps.write('/'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/css/'))
})

module.exports = 	gulp.task('styles:libs', function () {
	return gulp.src('app/styles/libs.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(shorthand())
		.pipe(cleancss({
			level: {
				2: {
					all: true,
					removeUnusedAtRules: false,
				}
			}
		}))
		.pipe(sourcemaps.write('/'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/css/'))
})