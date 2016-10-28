

gulp.task('deploy-iaas',function(){
  var iaas = require ("gitbook-start-plugin-heroku-ericlucastania");
  iaas.deploy();
});