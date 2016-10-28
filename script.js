'use strict';

module.exports = {
    
    initialize: () => {
        
        var fs = require('fs-extra');
        var path = require('path');
        
        var direct = process.cwd() + '/';
        var reg =/deploy-heroku/gi;
        var ruta = path.join(__dirname,'gulpfile.js');
        
      
      
        
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
         require('shelljs/global');
         exec("git remote add heroku " + pck.heroku.repo);
         exec("git add .;git commit -m \"desplegando en heroku\";git push heroku master");
    }
    
};

