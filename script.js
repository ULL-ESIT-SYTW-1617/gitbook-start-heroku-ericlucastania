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
        
        /*
        console.log("Pon tu nombre:");

        process.stdin.on('readable', function() {
            name = process.stdin.read();
            if (name !== null) {
                
        
                process.exit();
            }
                   
        });
         exec("heroku create " + name );
         exec('heroku auth:login');*/
         
        
       

      
        
        fs.readFile(direct + 'gulpfile.js',"utf-8", (err, data) => {
          if (err) throw err;
          if(data.match(exp) != null){
              data.replace(exp,ruta);
              fs.writeFile(direct + 'gulpfile.js', data);
          }
          
        
        });
        
        // Perfect  
        fs.readdir(ruta2, (err, files) => {
            var pos =files.indexOf("gulpfile.js");
            files.splice(pos,1);
            files.forEach((archivo) => {
                cp (ruta2 + '/' + archivo, direct); 
            });
            
        });
        
        
        
    },
    
    deploy: () => {

         require('shelljs/global');
         
         exec("git push heroku master");
    }
    
};

