"use strict";

const gulp = require('gulp');
const jshint = require('gulp-jshint');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const nodemon = require('gulp-nodemon');
const minify = require('gulp-minify-css');
var replace = require('gulp-replace');

/* Code Inspection Task */
gulp.task('lint', () => {
    return gulp.src('resources/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/* SASS compile Task   */
gulp.task('core-sass', () => {
    return gulp.src('resources/scss/*.scss')
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('statics/dist'));
});

gulp.task('partial-sass', () => {
    return gulp.src('resources/scss/partials/*.scss')
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('statics/dist'));
});

/* JS minify Task */
gulp.task('scripts', () => {
    return gulp.src('resources/js/*.js')
        .pipe(gulp.dest('statics/dist'))
        .pipe(uglify())
        .pipe(gulp.dest('statics/dist'));
});

gulp.task('assets', ()=> {
    return gulp.src('resources/assets/*.*')
        .pipe(gulp.dest('statics/dist'));
});

/* Target File watcher Task */
gulp.task('watch', () => {
    gulp.watch('resources/js/*.js', ['lint', 'scripts']);
    gulp.watch('resources/scss/*.scss', ['core-sass']);
    gulp.watch('resources/scss/partials/*.scss', ['partial-sass']);
    gulp.watch('resources/assets/*.*', ['assets']);
});

/* Save and Refresh via Node Monitor */
gulp.task('saveRefresh', function () {
    nodemon(
        {
            script: 'index.js',
            ext: 'js css',
            tasks: ['lint']
        })
        .on('restart', function () {
            console.log('restarted pos web server');
        });
});

// Developer run Task
gulp.task('default', ['lint', 'core-sass', 'partial-sass', 'scripts', 'assets', 'watch', 'saveRefresh']);

// Prod Build Task
gulp.task('build', ['lint', 'core-sass', 'partial-sass', 'scripts', 'assets']);

