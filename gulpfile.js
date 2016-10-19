var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('deploy', shell.task([
    'git push heroku master'
]));
    