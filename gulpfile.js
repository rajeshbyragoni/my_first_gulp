const gulp = require('gulp');

const sass = require('gulp-sass');

const browserSync = require('browser-sync').create();

const uglifycss = require('gulp-uglifycss');

const minify = require('gulp-minify');

const imagemin = require('gulp-imagemin');	


/*** style sass to css compiles ***/


function style () {

           //1. where is my scss file
           return gulp.src('scss/**/*.scss')

			//2. pass that file through sass compiler
			.pipe(sass())

			//3. where do i save the compiled css
			.pipe(gulp.dest('css'))
			
			//4. stream changes to all in browser
			.pipe(browserSync.stream());

		}

		function minifycss (){
			return gulp.src('css/**/*.css')
			.pipe(uglifycss({
				//"maxLineLen": 80,
				"uglyComments": true
			}))
			.pipe(gulp.dest('css'))
			//4. stream changes to all in browser
			.pipe(browserSync.stream());
		}

		function minifyjs () {
			return gulp.src('js/**/*.js')
			.pipe(minify())
			.pipe(gulp.dest('js'))
			//4. stream changes to all in browser
			.pipe(browserSync.stream());
		}
		

		function optmimg () {
			return gulp.src('images/**/*.+(jpg|png|gif|svg)')
			.pipe(imagemin())
			.pipe(gulp.dest('images'))
			.pipe(browserSync.stream());
		}




		function watch () {
			browserSync.init({
				server : {
					baseDir : './'
				}
			});
			gulp.watch('scss/**/*.scss', style);
			gulp.watch('./*.html').on('change', browserSync.reload);
	// here we can add many paths like js, html...
}







exports.style = style;
exports.minifycss = minifycss;
exports.minifyjs = minifyjs;
exports.optmimg = optmimg;

exports.watch = watch;

