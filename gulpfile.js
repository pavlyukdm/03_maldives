const gulp = require('gulp')

require('./gulp/tasks/clean')
require('./gulp/tasks/html')
require('./gulp/tasks/js')
require('./gulp/tasks/styles')
require('./gulp/tasks/serve')
require('./gulp/tasks/fonts')
require('./gulp/tasks/watch')
require('./gulp/tasks/imageMinify')

gulp.task("default", gulp.series(
	"clean",
	gulp.parallel("imageMinifyTinyPNG", "imageMinifyImagemin", "styles:main", "styles:libs", "js:main", "js:libs", "html", "fonts"),
	gulp.parallel("serve")
))