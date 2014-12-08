var gulp = require('gulp');
    concatCss = require('gulp-concat-css');
    // uncss = require('gulp-uncss');
    minifyCSS = require('gulp-minify-css');
    rename = require("gulp-rename");
    notify = require("gulp-notify");
    autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  gulp.src('css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(autoprefixer({
            browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
            cascade: false
        }))
    // .pipe(uncss({
    //         html: ['index.html']}))
    .pipe(minifyCSS())
    .pipe(rename("bundle.min.css"))
    .pipe(gulp.dest('out/'))
    .pipe(notify("Done!"));
});

gulp.task('watch', function(){
    gulp.watch('css/*css', ['default']);
});