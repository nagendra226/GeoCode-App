# GeoCode-App
Get the Weather of any location by passing the city name. This app uses Weather Stack API and Map Box API to communicate.
You will get the output in fahrenheit.

# Need to have one module
  npm init - y
  
# install postman-request
  npm i postman-request
  
# How to run
  Takes the input from the process.agrv
  Example: node app.js New York
  
# Signup WeatherStack
Signup to weather stack and get the access token from the weather stack

# Weather Stack link
https://weatherstack.com/dashboard

// This is a vairable.
const weatherStackUrl = `http://api.weatherstack.com/current?access_key=&query=${latitude},${longitude}&units=f

add the access key at the access_key = {key} (your key from the Weather Stack)

# Signup Mapbox
Signup to mapbox and get the access token from the map box

# Mapbox link
https://account.mapbox.com/access-tokens/

// This a variable
const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?limit=2&access_token=";

Add the access token at the end of the variable access_token (your key from the map box)
