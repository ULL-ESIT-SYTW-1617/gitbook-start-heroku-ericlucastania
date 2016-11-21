'use strict';

module.exports = {

  initialize: () => {

    var readlineSync = require('readline-sync');
    const Heroku = require('heroku-client');
    var tokenHeroku = readlineSync.question('Introduzca el token para conectarte: ');
    try{
      var heroku = new Heroku({ token: tokenHeroku });
    }
    catch(err){
      console.error("Error al conectarte por token");
    }
    var fs = require('fs-extra');
    require('shelljs/global');
    var path = require('path');

    var directorioUsuario = process.cwd() + '/';
    var exp = /\n\ngulp.task\(\'deploy\-heroku(.*\n)*\}\)\;\/\/finish deploy-heroku/gim;

    var directorioPlugin = path.join(__dirname, 'template', 'gulpfile.js');
    var directorioPlugin2 = path.join(__dirname, 'template');


    function descarga() {
      return new Promise(function (resolve, reject) {

        resolve(exec('npm install --save gitbook-start-plugin-heroku-ericlucastania'));
      });
    }

    function resolverNombre() {
      return new Promise(function (resolve, reject) {

        var nombre = readlineSync.question('Introduzca el nombre de la aplicación: ');
        if (nombre !== null)
          resolve(nombre);
      });
    }

    descarga().then(function(res){
          resolverNombre().then(function(nombre){
            heroku.post('/apps', {body: {name: nombre}}).then(app => {
              exec('git remote add heroku ' + 'https://git.heroku.com/' + nombre + '.git' );
            });
        });
    });



    fs.readFile(directorioUsuario + 'gulpfile.js', "utf-8", (err, data) => {
      if (err) throw err;
      fs.readFile(directorioPlugin, "utf-8", (err, dataDirectorioPlugin) => {
        if (data.match(exp) == null) {
          if (err) throw err;
          fs.appendFile(directorioUsuario + 'gulpfile.js', dataDirectorioPlugin);
        }
        else {
          var dataModificado = data.replace(exp, dataDirectorioPlugin);
          fs.writeFile(directorioUsuario + 'gulpfile.js', dataModificado);
        }
      });
    });


    var frecursiva = (destino, origenArchivo) => {
      try {
        fs.readdir(origenArchivo, (err, files) => {
          if (err) console.log(err);
          files.forEach(files => {
            var check = origenArchivo + '/' + files;
            if (fs.statSync(check).isDirectory()) {
              fs.mkdirSync(destino + '/' + files);
              frecursiva(destino + '/' + files, check);
            }
            else {
              cp(origenArchivo + '/' + files, destino);
            }

          });
        });
      }
      catch (e) {
        console.log("Error en copia");
      }

    };

    // Perfect  


    fs.readdir(directorioPlugin2, (err, files) => {
      
      if(err) console.log(err);
      var auth = readlineSync.question('¿Quiere solicitar autentificación para que los usuarios puedan acceder a su libro?(s/n): ');
      if ((auth == 's') || (auth == 'S') || (auth == '')) {
        var posapp = files.indexOf("app.js");
        files.splice(posapp,1);
        
      }
      else if ((auth == 'n') || (auth == 'N')) {
        var posappAuth = files.indexOf("appAuth.js");
        files.splice(posappAuth,1);
      }
      else {
        console.log("Opción desconocida.");
      }
      var pos = files.indexOf("gulpfile.js");
      files.splice(pos, 1);

      files.forEach((archivo) => {
        var check = directorioPlugin2 + '/' + archivo;
        if (fs.statSync(check).isDirectory()) {
          fs.mkdirSync(directorioUsuario + '/' + archivo);
          frecursiva(directorioUsuario + '/' + archivo, check);
        }
        else {
          cp(directorioPlugin2 + '/' + archivo, directorioUsuario);
        }
      });
      fs.writeFileSync(directorioUsuario + '/Procfile', 'web: node appAuth.js');
    });


  },

  deploy: () => {
    var fs = require('fs-extra');
    var directorioUsuario = process.cwd() + '/';
    fs.rename(directorioUsuario + '/gh-pages/index.html', directorioUsuario + '/gh-pages/juanito.html', function (err) {
      if (err) throw err;
    });
    require('shelljs/global');
    exec('git add .');
    exec('git commit -m "deploying heroku"');
    exec("git push heroku master");
  }

};
