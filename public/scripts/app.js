(function(){
    function start(){
        console.log("App Started...");
    }
    window.addEventListener("load",start);
})();
let express = require('express');
let app = express();

app.use(express.static('public'));


