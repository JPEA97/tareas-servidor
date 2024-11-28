const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
require('dotenv').config();


const app = express();

app.use('', routes);


let port = process.env.PORT || 3000;

//Connecting to Database
const db_url = process.env.DB_URL;

async function start(){
    try{
        await mongoose.connect(db_url);
        app.listen(port, () => {
            console.log('App is running in port ' + port);
        })

    }catch(e){
        console.log('failed to connect to db', e);

    }
}
start();