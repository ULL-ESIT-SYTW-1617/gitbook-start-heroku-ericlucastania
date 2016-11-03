'use strict';

module.exports = {
    
    initialize: () => {
        
        var fs = require('fs-extra');
        require('shelljs/global');
        var path = require('path');
        var readlineSync = require('readline-sync');
        
        var directorioUsuario = process.cwd() + '/';
        var exp =/\n\ngulp.task(.*\n)*\}\)\;\/\/finish deploy-heroku/gim;
        
        
        var directorioPlugin = path.join(__dirname, 'template', 'gulpfile.js');
        var directorioPlugin2 = path.join(__dirname, 'template');
        var userName;
          
                
        function login () {
          const spawn = require('child_process').spawn
          return new Promise(function (resolve, reject) {
            spawn('heroku', ['login'], {stdio: 'inherit'})
              .on('close', function (e) {
                if (e === 0) resolve()
                else reject(new Error('Authorization failed.'))
              })
          })
        }
        
        function resolverNombre(){
          return new Promise(function (resolve, reject) {
             
              var nombre = readlineSync.question('Introduzca el nombre de la aplicación: ');
              if(nombre !== null)
                resolve (nombre);
          });
        }
        
        
        login().then(function(res){
          resolverNombre().then(function(nombre){
            exec("heroku create " + nombre);
          });
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

