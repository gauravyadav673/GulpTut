const gulp = require('gulp');
const gulpImagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const scss = require('gulp-sass');
const concat = require('gulp-concat');

//default task
gulp.task('default', ['copyHTML', 'imageMin', 'scss', 'concat', 'watch']);

//copy html files to dist folder
gulp.task('copyHTML', ()=> {
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});

//otimize images
gulp.task('imageMin', function(){
	gulp.src('src/images/*')
		.pipe(gulpImagemin())
		.pipe(gulp.dest('dist/images'));
});

//uglify javascript (added to concatAndUglify)
/*gulp.task('uglifyJS', ()=>{
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});
*/
//convert scss to css
gulp.task('scss', ()=>{
	gulp.src('src/style/*.scss')
		.pipe(scss().on('error', scss.logError))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('concatAndUglify', ()=>{
	gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('watch', ()=>{
	gulp.watch('src/*.html', ['copyHTML']);
	gulp.watch('src/js/*.js', ['concat']);
	gulp.watch('src/style/*.scss', ['scss']);
	gulp.watch('src/images/*', ['imageMin']);
});
