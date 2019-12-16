const gulp = require('gulp');
const webpack = require('webpack-stream');
var livereload = require('gulp-livereload');

gulp.task('compile', function() {
 return gulp.src('src/index.tsx')
   .pipe(webpack(require('./webpack.config.js')))
   .pipe(gulp.dest('dist/'))
   .pipe(livereload());
});

gulp.task('watch', function() {
   livereload.listen();
   gulp.watch('./src/**/*.tsx', gulp.series('compile'));
});