/// <binding ProjectOpened='sass:watch' />
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('uglify', function () {
    return gulp.src('js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
    gulp.watch(["./scss/**/*.scss"], gulp.series('sass'));
});