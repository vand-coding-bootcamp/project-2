# Sweati - a fitness app
A fitness app to track timing of cardio, mindfulness, and strength training.
## Authors
* Amy Haerr
* Brooke Guarienti
* Haylee McLemore
* John Pendergrass


## Purpose of App
The purpose of Sweati is to keep track of your cardio, mindfulness, and strength training but tracking the activity and the time you spent doing it. You can also share your fitness with your friends.

## Links
* Github repo: https://github.com/vand-coding-bootcamp/sweati
* Heroku link: https://sweati-fitness-app.herokuapp.com

## Code Explanation
The `server.js` file sets up:
* the Express server - framework for node.js
* handlebars server - uses an Express way of structing an app's views.
* routes - allows dispatch using url strings to route http request.
* body-parser - parses incoming request body in a middleware before handlers.
* passport and bcrypt to encrypt and authenticate usernames and passwords in the database.

The `config` folder contains:
* `config.json` which contains the ports for both the mysql database for heroku and the local host. 
* `keys_dev.js` 
* `keys_prod.js` 
* `keys.js` 
* `passport.js` 

The `views` folder contains all the handlebars that contain the HTML code for the UI

The `views` folder holds the handlebars files `main.handlebars` and `index.handlebars` which contains the HTML code for the UI.

## Tech used
    * JavaScript
    * Node.js
    * HTML/CSS
    * Handlebars
    * Body-parser
    * Express.js
    * Passport
    * bcrypt
    * bcrypt2

## Shoutouts
Thanks to:
* Ihab