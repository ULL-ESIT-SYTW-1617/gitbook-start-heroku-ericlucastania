

gulp.task('deploy-heroku',function(){
  var iaas = require ("gitbook-start-plugin-heroku-ericlucastania");
  iaas.deploy();
});