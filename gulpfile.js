const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');

// scss to css
function scss() {
    return src('./scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest('./css'))
    .pipe(browserSync.stream());
}

function watcher() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    watch('./scss/**/*.scss', scss);
    watch('./*.html').on('change', browserSync.reload);
    watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.scss = scss;
exports.watcher = watcher;