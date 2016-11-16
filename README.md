#Práctica: Heroku [PLUGIN]


## Descripción

Este es el repositorio del plugin. Aquí puedes encontrar dentro del archivo script.js las funcionalidades que se exportan. El
initialize y el deploy.

## Explicación

En este repositorio se han trabajado los módulos initialize y deploy, el método initialize es llamado cuando se ejecuta un gitbook-start -d heroku
y se encarga de meter la tarea de despliegue dentro del gulp del usuario. El método también le copia en el directorio de trabajo un
servidor y un archivo Procfile necesarios para el despliegue de la aplicación,así como también loguearle en heroku y crearle un repositorio en heroku. El método
deploy solo hace un push al repositorio de heroku, este método es llamado cuando se ejecuta un gulp deploy-heroku

## Pasos a ejecutar 

**1. Instala nuestro paquete de forma global**

```npm install -g gitbook-start-elt```


**2. Ejecuta el binario para el render del template**

```gitbook-start --dir Carpeta``` !!Si no ejecutas el --dir se creará una carpeta con tu nombre de usuario

**3. Entra en la carpeta**

 ```cd Carpeta```




## PLUGINS

**1. Instala el plugin forma global**

```npm install -g gitbook-start-plugin-heroku-ericlucastania```

**2. Ejecuta el plugin que desees, asegúrate de estar dentro de la carpeta**


```gitbook-start -d heroku``` !! También puedes usar la opción --deploy

* Te pedirá un token, puedes generarlo ejecutando ```heroku auth:token``` o bien usar uno ya generado.
* Se te solicitará el nombre que tendrá tu aplicación en Heroku.
* Te preguntará si deseas pedir autentificación para que sólo los usuarios de tu organización puedan leer el libro.
    * Tienes diferentes opciones:
        * Si quieres que solo los usuarios de la organización puedan acceder al libro 
          tendras que poner la opción 's' o 'S' o simplemente darle a enter
        * Si quieres que cualquiera pueda acceder al libro,tendrás que poner la opción 
          'n' o 'N'
        

**3. Ejecuta el gulp creado**

```gulp deploy-heroku```

#### Explicación

Cuando se ejecuta el gitbook-start -d PLUGIN se te lanzará el initialize del plugin,
el initialize crea una tarea en el gulp para realizar el deploy. Además de guardarte el paquete
elegido en el package.json.

## Corrección 

Usamos la Api de heroku para conectarnos a la aplicación

```javascript
     const Heroku = require('heroku-client');
            var tokenHeroku = readlineSync.question('Introduzca el token para conectarte: ');
            try{
              var heroku = new Heroku({ token: tokenHeroku });
            }
            catch(err){
              console.error("Error al conectarte por token");
            }
```

## Opciones

    gitbook-start [OPTIONS]
        -d nombre del directorio a crear node gitbook-star -d miDirectorio
        -a autor del libro a crear node gitbook-star -a AutorDelLibro
        -e email del autor del libro node gitbook-star -e eric.ramos.suarez@gmail.com
        -r repositorio github contra el que se va a trabajar -r nameRepo
        -v muestra la version del paquete gitbook-start -v
        -h muestra ayuda sobre las opciones disponibles
        
        
## Enlaces interesantes 
 
* [NPM](https://www.npmjs.com/package/gitbook-start-elt)
* [Repositorio de la práctica](https://github.com/ULL-ESIT-SYTW-1617/practica-plugins-heroku-ericlucastania)
* [Descripción de la tarea campus](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin2.html)
* [PLUGIN](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-heroku-ericlucastania.git)
* [NPM PLUGIN](https://www.npmjs.com/package/gitbook-start-plugin-heroku-ericlucastania)

## Componentes del grupo de trabajo

* [Eric Ramos](https://github.com/alu0100786330)
* [Lucas Ruiz](https://github.com/alu0100785265)
* [Tania González](https://github.com/tania77)
