const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const imagemin = require("gulp-imagemin")

function styles(){// comprimi e move para a pasta dist
    return gulp.src("./src/styles/*.scss")
        .pipe(sass({outputStyle:"compressed"}))
        .pipe(gulp.dest("./dist/css"))
}

function images(){
    return gulp.src("./src/images/**/*")
        .pipe(imagemin()) //função para ser executad
        .pipe(gulp.dest("./dist/images"))
}

exports.default = gulp.parallel(styles, images);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}