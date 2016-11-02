'use strict';

module.exports = {
    
    initialize: () => {
        var direct = process.cwd() + '/';
        var path = require('path');
        var reg =/deploy-heroku/gi;
        var ruta = path.join(__dirname,'gulpfile.js');
        var fs = require('fs-extra');
      
      
        
        fs.readFile(direct + 'gulpfile.js',"utf-8", (err, data) => {
          if (err) throw err;
          if(data.match(reg) == null){
            
            fs.readFile(ruta, (err, data) => {
              if (err) throw err;
              
              fs.appendFile(direct +'gulpfile.js', data, (err) => {
                if (err) throw err;
              });
              
            });
            
          }
        });
        
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
    }
    
};

