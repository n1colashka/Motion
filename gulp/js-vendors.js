const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
    // Insert libs src here:
    'node_modules/swiper/swiper-bundle.min.js',
    'node_modules/plyr/dist/plyr.polyfilled.min.js',
    'node_modules/smoothscroll-for-websites/SmoothScroll.js',
];

module.exports = function vendors(cb) {
    return vendorsScripts.length
        ? gulp.src(vendorsScripts)
            .pipe(concat('libs.js'))
            .pipe(gulp.dest('app/js/'))
        : cb();
};
