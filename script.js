'use strict';

module.exports = {
    
    initialize: () => {
        
        var fs = require('fs-extra');
        require('shelljs/global');
        var path = require('path');
        
        var direct = process.cwd() + '/';
        var exp =/gulp.task(.*\n)*\}\)\;\/\/finish deploy-heroku/gim;
        
        
        var ruta = path.join(__dirname, 'template', 'gulpfile.js');
        var ruta2 = path.join(__dirname, 'template');
          
          
        var name;
        console.log("Pon tu nombre:");

        process.stdin.on('readable', function() {
            name = process.stdin.read();
            if (name !== null) {
                
        
                process.exit();
            }
                   
        });
         exec("git remote add heroku " + pck.heroku.repo);
         exec("heroku create " + name );
         exec('heroku auth:login');
         
        
       

      
        
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
         
         exec("git add .;git commit -m \"desplegando en heroku\";git push heroku master");
    }
    
};

