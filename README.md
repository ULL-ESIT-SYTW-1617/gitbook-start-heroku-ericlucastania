#Práctica: Heroku [PLUGIN]


## Descripción

Este es el repositorio del plugin. Aquí puedes encontrar dentro del archivo script.js las funcionalidades que se exportan. El
initialize y el deploy.

## Explicación

En este repositorio se han trabajado los módulos initialize y deploy, el método initialize es llamado cuando se ejecuta un gitbook-start -d heroku
y se encarga de meter la tarea de despliegue dentro del gulp del usuario. El método también le copia en el directorio de trabajo un
servidor y un archivo Procfile necesarios para el despliegue de la aplicación,así como también loguearle en heroku y crearle un repositorio en heroku. El método
deploy solo hace un push al repositorio de heroku, este método es llamado cuando se ejecuta un gulp deploy-heroku


## Enlaces interesantes 
 
* [NPM](https://www.npmjs.com/package/gitbook-start-elt)
* [Enlace al Repositorio de la práctica](https://github.com/ULL-ESIT-SYTW-1617/practica-plugins-heroku-ericlucastania)
* [Descripción de la tarea campus](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin2.html)
* [Enlace a PLUGIN](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-heroku-ericlucastania.git)
* [Enlace a NPM PLUGIN](https://www.npmjs.com/package/gitbook-start-plugin-heroku-ericlucastania)

## Componentes del grupo de trabajo

* [Eric Ramos](https://github.com/alu0100786330)
* [Lucas Ruiz](https://github.com/alu0100785265)
* [Tania González](https://github.com/tania77)