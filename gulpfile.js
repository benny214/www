var gulp = require('gulp');
    concatCss = require('gulp-concat-css');
    // uncss = require('gulp-uncss');
    minifyCSS = require('gulp-minify-css');
    rename = require("gulp-rename");
    notify = require("gulp-notify");
    autoprefixer = require('gulp-autoprefixer');
    imageop = require('gulp-image-optimization');
    htmlmin = require('gulp-htmlmin');
    // uglify = require('gulp-uglify');
    // concat = require('gulp-concat');

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

gulp.task('images', function(cb) {
    gulp.src(['img/*.png','img/*.jpg','img/*.gif','img/*.jpeg'])
    .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('images')).on('end', cb).on('error', cb);
});
gulp.task('minify', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});
// gulp.task('compress', function() {
//   gulp.src('js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('out/js'))
// });

// gulp.task('scripts', function() {
//   gulp.src('./lib/*.js')
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('./dist/'))
//     .pipe(uglify())
//     .pipe(gulp.dest('out/js'))
// });



