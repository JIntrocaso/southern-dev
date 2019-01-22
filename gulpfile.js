var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
// var cache = require('gulp-cache');

// JS Gulp Plugins
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('docs'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

  gulp.task('sass', function(){
    return gulp.src('src/sass/*.sass')
      .pipe(sass())
      .pipe(gulp.dest('docs/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

  gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(concat('all.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('docs/js'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

  gulp.task('images', function() {
    return gulp.src('src/images/*.+(png|jpg|gif|svg)')
      .pipe(imagemin({
        interlaced: true
      }))
      .pipe(gulp.dest('docs/images'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

  gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: './docs'
      }
    })
  });

  gulp.task('watch', ['sass', 'js', 'browserSync'], function() {
    gulp.watch('src/sass/*.sass', ['sass']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/images/*.+(png|jpg|gif|svg)', ['images']);
  });


