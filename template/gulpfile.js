

gulp.task('deploy-heroku',function(){
  var heroku = require ("gitbook-start-plugin-heroku-ericlucastania");
  heroku.deploy();
});//finish deploy-heroku