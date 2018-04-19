var gulp      = require('gulp'     );
var sass      = require('gulp-sass');
var minifycss = require('gulp-csso');

gulp.task('compile-sass', function(){
    return gulp.src('app/scss/*.scss')
            .pipe(sass())
            .pipe(minifycss())
            .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['compile-sass']);