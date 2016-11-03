'use strict';

module.exports = {
    
    initialize: () => {
        
        var fs = require('fs-extra');
        require('shelljs/global');
        var path = require('path');
        
        var direct = process.cwd() + '/';
        var reg =/gulp.task(.*\n)*\}\)\;\/\/finish deploy-heroku/gim;
        
        
        var ruta = path.join(__dirname, 'template', 'gulpfile.js');
        var ruta2 = path.join(__dirname, 'template');
        //var ruta3 = path.join(__dirname, 'template', 'Procfile');
          
      
      
        
        fs.readFile(direct + 'gulpfile.js',"utf-8", (err, data) => {
          if (err) throw err;

          data.replace(exp,ruta);
          fs.writeFile(direct + 'gulpfile.js', data);
        
        });
        
        
        fs.readdir(ruta2, (err, files) => {
            var pos =files.indexOf("gulpfile.js");
            files.splice(pos,1);
            files.forEach((archivo) => {
                cp (ruta2 + '/' + archivo, direct); 
            });
            
        });
        
    },
    
    deploy: () => {

         var pck = require("./package.json");
         require('shelljs/global');
         exec("git remote add heroku " + pck.heroku.repo);
         exec("git add .;git commit -m \"desplegando en heroku\";git push heroku master");
    }
    
};

