let gulp = require("gulp");
let inline = require("gulp-inline");
let gulpSequence = require('gulp-sequence');
let stylus = require('gulp-stylus');
let webpack = require('gulp-webpack');
let webpackStream = require('webpack-stream');
let minify = require('gulp-minify');

gulp.task("stylus",function(){
    return gulp.src("./src/style.styl")
               .pipe(stylus())
               .pipe(gulp.dest("./dist"));
});

gulp.task("webpack",function(){
    return gulp.src("./src/*.js")
               .pipe( webpackStream(require('./webpack.config.js')),webpack)
               .pipe(gulp.dest("./dist"));
});

gulp.task('compress', function() {
    gulp.src(['./dist/*.js'])
      .pipe(minify())
      .pipe(gulp.dest('dist'))
  });

gulp.task("inline", function(){
    return gulp.src("./src/index.html")
                .pipe(inline({
                    base: 'dist',
                    disabledTypes: ["img"]
                }))
                .pipe(gulp.dest('dist/'));
});



gulp.task("default", gulpSequence("stylus","webpack","compress","inline"));