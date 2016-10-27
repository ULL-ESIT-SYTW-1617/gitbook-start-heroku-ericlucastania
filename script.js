'use strict';

module.exports = {
    
    initialize: () => {
        var pck = require("./package.json");
        var exec = require("child_process").exec;
        exec("git remote add heroku " + pck.heroku.repo);
        exec("git push heroku master" + pck.heroku.repo);
    },
    
    deploy: () => {
        
    }
};