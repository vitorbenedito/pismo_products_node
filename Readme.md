NodeJS Crud
======

Simple Crud in NodeJS + AngularJS + MongoDB


Install latest nodejs
-------------------------------------------------------------
$ sudo apt-get update<br>
$ sudo apt-get install nodejs<br>

Install latest NPM
--------------------------------------------------------------
$ sudo npm install npm-latest

Install mongodb nodejs driver
--------------------------------------------------------------
$ sudo npm install -g mongodb<br>
$ sudo npm install -g mongoose<br>

Install Bower
--------------------------------------------------------------
$ sudo npm install -g bower

Start the app:
--------------------------------------------------------------

$ cd /pismo_products_node/<br>
$ npm install<br>
$ cd /public<br>
$ bower install<br>
$ mongod --dbpath ~/dev/mongo/
$ cd ..<br>
$ mongoimport --db products --collection products --drop --file products.json 
$ node app.js<br>

Heroku deploy crud
--------------------------------------------------------------
https://productscrud.herokuapp.com