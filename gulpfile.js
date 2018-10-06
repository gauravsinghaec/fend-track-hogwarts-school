/*eslint-env node */
let gulp = require('gulp');
let browserSync = require('browser-sync');

// Static Servers + watching html/js/css files
gulp.task('serve', () => {
    browserSync.init({
        server: "."
    });
    gulp.watch(['css/*.css', 'js/*.js', '*.html']).on('change',browserSync.reload);
});

gulp.task('default',['serve']);
