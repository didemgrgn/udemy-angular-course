//Install express server
const express =require('express');
const path = require('path');

const app = express();

//Server only the static files form the dist directory
app.use(express.static(__dirname + 'dist/udemy-angular-course')); //Build olduktan sonra

app.get('/*', function (req,res){

    res.sendFile(path.join(__dirname + '/dist/udemy-angular-course/index.html')); //index.html gönderiliyor
});

//Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);