let gulp = require("gulp");
let inline = require('gulp-inline')

gulp.task("inline", function(){
    return gulp.src("./dist/index.html")
                .pipe(inline({
                    base: 'dist',
                    disabledTypes: ["img"]
                }))
                .pipe(gulp.dest('dist/'));
});

gulp.task("default", ["inline"]);