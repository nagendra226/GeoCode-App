//jshint esversion:6
'use strict';

//npm module
const request = require('postman-request');

//JS Files
const geo = require("./geocode");
const forecast = require("./weatherstack");

/* ------------------------------ MapBox Begin ------------------------------ */
if(process.argv[2]){
    geo.geoCode(process.argv[2], (error, {values,place_name,responseError}) => {
        if (values) {
            const [lat, long] = values;
            console.log(`Lattitude= ${lat}, Longitude= ${long}, Place_Name = ${place_name}`);
    
            /* --------------------------- Weather Stack Begin -------------------------- */
            forecast.weatherstack(lat, long, (error, {temp,desc,responseError}) => {
                if (temp) {
                    console.log(`The temperature is ${temp} Farenheit and it seems ${desc} `);
                } else {
                    console.log("Connection Error: " + error);
                    console.log("Error from the Service: " + responseError);
                }
            });
    
            /* ---------------------------- Weather Stack End --------------------------- */
            
        } else {
            console.log("Connection Error: " + error);
            console.log("Error from the Service: " + responseError);
        }
    });
}else{
    console.log("Please run the app as node app.js cityname Example: node app.js Bengaluru")
}
/* ------------------------------- MapBox End ------------------------------- */