# mongodb notes

* mongo syntax
Verify version
$ mongod

Verify working
$ mongo

# app prep
1. create server.js, install express, listen on port
# front-end plan
1. add HTML to /public
2. add CSS to /public/asset/css
3. add listens\eventhandlers JS to /public/assets/js
# back-end plan
1. install\import mongodb and mongooseJS lib to server.js
2. add pizza model and index in /models
3. add mongoose JS lib to mongodb connection, create db in server.js
4. add pizza API\router get routes to /routes
5. add /routes/api/pizza-routes.js