'use strict';

module.exports = {
    
    initialize: () => {
        
        var fs = require('fs-extra');
        require('shelljs/global');
        var path = require('path');
        
        var direct = process.cwd() + '/';
        var reg =/gulp.task(.*\n)*\}\)\;\/\/finish deploy-heroku/gim;
        
        
        var ruta = path.join(__dirname, 'template', 'gulpfile.js');
        var ruta2 = path.join(__dirname, 'template', 'app.js');
        var ruta3 = path.join(__dirname, 'template', 'Procfile');
          
      
      
        
        fs.readFile(direct + 'gulpfile.js',"utf-8", (err, data) => {
          if (err) throw err;

          data.replace(exp,ruta);
          fs.writeFile(direct + 'gulpfile.js', data);
        
        });
        
        
        
        exec("cp " + ruta2 + " " + direct);
        exec("cp " + ruta3 + " " + direct);
        
    },
    
    deploy: () => {

        var pck = require("./package.json");
        var exec = require("child_process").exec;
   exec(process.cwd() + '/' + "echo web: node  app.js >> Procfile ");
   exec("git remote remove heroku;git remote add heroku " + pck.heroku.repo,(error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        });
        exec("git add .;git commit -m \"desplegando en heroku\";git push heroku master",(error, stdout, stderr) => {

         var pck = require("./package.json");
<<<<<<< HEAD
         var exec = require("child_process").exec;
         exec(process.cwd() + '/' + "echo web: node  app.js > Procfile ");
         exec("git remote remove heroku;git remote add heroku " + pck.heroku.repo,(error, stdout, stderr) => {
                if (error) {
                  console.error(`exec error: ${error}`);
                  return;
                }
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
              });
         exec("git add .;git commit -m \"desplegando en heroku\";git push heroku master",(error, stdout, stderr) => {

          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        });
=======
         require('shelljs/global');
         exec("git remote add heroku " + pck.heroku.repo);
         exec("git add .;git commit -m \"desplegando en heroku\";git push heroku master");
>>>>>>> 50c8308b222edb69dafb977e9fdad889c85e3c35
    }
    
};

