'use strict';

module.exports = {
    
    initialize: () => {
        
        console.log("HOLAAAA");
    },
    
    deploy: () => {
        var pck = require("./package.json");
        var exec = require("child_process").exec;
        exec("git remote remove heroku;git remote add heroku " + pck.heroku.repo,(error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        });
        exec("git commit -am \"desplegando en heroku\";git push heroku master",(error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        });
    }
    
};

