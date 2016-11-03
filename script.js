'use strict';

module.exports = {
    
    initialize: () => {
        
        var fs = require('fs-extra');
        require('shelljs/global');
        var path = require('path');
        
        var directorioUsuario = process.cwd() + '/';
        var exp =/\n\ngulp.task(.*\n)*\}\)\;\/\/finish deploy-heroku/gim;
        
        
        var directorioPlugin = path.join(__dirname, 'template', 'gulpfile.js');
        var directorioPlugin2 = path.join(__dirname, 'template');
        var userName;
          
        
        
        var comprobar = new Promise(function (resolve, reject){
            exec('heroku login',(err, stdout, stderr) => {
              if (err) {
                console.error(err);
                return;
              }
              console.log(stdout);
            });
            
            
            process.stdin.on('readable', (function() {
                userName = process.stdin.read();
                if (userName !== null) {
                    
                    process.exit();
                }
                else{
                    userName = "hr"; //Cambiar dopo
                    process.exit();
                }
                       
            })());
        
        
        });
        comprobar.then(function(value) {
          console.log(value);
           exec("heroku create " + userName );
           exec('heroku auth:token');
           
        });
        
         
        
       
/*
      
        
        fs.readFile(directorioUsuario + 'gulpfile.js',"utf-8", (err, data) => {
              if (err) throw err;
            fs.readFile(directorioPlugin,"utf-8", (err, dataDirectorioPlugin) => {  
              if(data.match(exp) == null){
                  if(err) throw err;
                  fs.writeFile(directorioUsuario + 'gulpfile.js', dataDirectorioPlugin);
              }
              else{
                  var dataModificado = data.replace(exp,dataDirectorioPlugin);
                  fs.writeFile(directorioUsuario + 'gulpfile.js', dataModificado);
              }
            });
        });
        
        // Perfect  
        fs.readdir(directorioPlugin2, (err, files) => {
            var pos = files.indexOf("gulpfile.js");
            files.splice(pos,1);
            files.forEach((archivo) => {
                cp (directorioPlugin2 + '/' + archivo, directorioUsuario); 
            });
            
        });
        
        */
        
    },
    
    deploy: () => {

         require('shelljs/global');
         
         exec("git push heroku master");
    }
    
};

