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

ANTES DE EMPEZAR ASEGÚRATE DE TENER EL TOOLBET DE HEROKU INSTALADO

**1. Instala nuestro paquete de forma global**

```npm install -g gitbook-start-elt```

**2. Instala el plugin de forma global**

```npm install -g gitbook-start-plugin-heroku-ericlucastania```

**3. Ejecuta el binario para el render del template**

```gitbook-start --dir Carpeta``` !!Si no ejecutas el --dir se creará una carpeta con tu nombre de usuario

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
