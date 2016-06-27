var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer  = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat');
	uglify = require('gulp-uglify')

gulp.task('procesa-estilos', function () {
  return sass('src/css/style.scss')
  	.pipe(autoprefixer('last 3 versions'))
    .pipe(gulp.dest('dest/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dest/css/'))
});

gulp.task('procesa-scripts', function () {
  return gulp.src('src/js/*.js')
  	.pipe(concat('main.js'))
  	.pipe(gulp.dest('dest/js/'))   
  	.pipe(rename({suffix: '.min'}))
  	.pipe(uglify())
  	.pipe(gulp.dest('dest/js/'))   
  	
});

gulp.task('watch', function (){
	gulp.watch('src/css/*.scss', ['procesa-estilos'])
	gulp.watch('src/js/*.js', ['procesa-scripts'])
});