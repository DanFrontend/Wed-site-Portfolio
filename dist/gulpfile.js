const gulp = require('gulp');

gulp.task('default', function() {
    return gulp.src('./**/*')
        .pipe(gulp.dest('../dist'));
});