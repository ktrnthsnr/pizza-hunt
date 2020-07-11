# pizza-hunt
Social networking application, supported by a MongoDB and MongooseJS library, integrating with an existing Node.js based front-end.

## GitHub URL
https://github.com/ktrnthsnr/pizza-hunt

## Heroku website
https://


## Table of Contents

* [Description](#description)
* [Technology](#technology)
* [Installations](#installations)
* [Usage](#usage)
* [Testing](#testing)
* [Collections](#collections)
* [Contribution](#contribution)

## Description

- This repo's work is focused on building out the back-end and middleware of a social networking application, pizz-hunt, that integrates with an existing front-end. From the Heroku pizza-hunt website, users may sign-in and update a pizza with custom topping, and also interact with a list of other users, discussing the pizza toppings, crust and sauces of their choice. In the website, a user may post some of their thoughts and also react to each other's thoughts. Additionally, users may be able to edit or delete these as well. 

- The Node.js based API uses Express.js for routing, MongoDB as data storage for the NoSQL backend database, Mongoose Object Data Management (ODM) system to create and manage the database queries on startup, and Moment.js npm package to format any time dependent aspects of the application. 

- This Readme.md includes a walkthrough of the backend portion of the work, the majority of the work for this project, required by the website to provide large amounts of unstructured data. 
- The first walkthrough shows the application from the user's point of view, throught the Heroku website features.
- The second walkthrough listed under the TOC Usage, shows the application as if it were cloned to a localhost and started at the Node.js commandline, with the API endpoints viewed through the Insomnia tool. Invoking the application at the bash terminal, the JavaScript begins with the start up of the Express.js server which then creates the Mongoose table models, syncing to the MongoDB backend. Then through the debugging Insomnia tool, you can view the API routes and JSON output shown when a user is created, their friends are added to their lists, and their thoughts and reactions to their friends' thoughts are added, updated or removed - basically the social interaction of a group of friends!

## Technology
MongoDB, Mongoose JS, Node.js, npm, Express.js, Insomnia, JavaScript, ES6, Heroku, HTML, CSS

## Installations
- For local installations, below are various steps required.
- Prereq for your desktop: install VSCode, Node.js, and MySQL http://dev.mysql.com/downloads/
- After cloning the GitHub repo to your local drive, run the following in the VSCode command-line terminal
- Install all components listed within the package.json file for npm
- $ `npm i`
-
- For custom installations, start with initializing npm
- $ `npm init -y` or $ `npm install`
- Manaully update the package.json to  `"main": "server.js",` instead of index.js
- Create a .gitignore file in the root and add `node_modules` to this file
- If you need to re-add the dependencies, run $ `npm install`
- Install npm express, more info https://www.npmjs.com/package/express
- $ `npm install express`
- Install MongoDB, first create a `c:\data\db` directory on your root, then install the Community Server from https://www.mongodb.com/try/download/community, excluding the compass from the installation, and adding the /bin folder to the environment variable PATH.
- Install the MoongooseJS library
- $ `npm install mongoose`

## Usage
- The application may be viewed through the Heroku website.
- However, if cloning locally from github, complete the installation, then start up at the bash commandline, by typing
- $ `npm start`
- Here is walkthrough of the application from the localhost, if viewing the API routes through Insomnia,

- 
![site](./img/site.jpg "insert")


## Testing

- For testing the API routes locally, here is an Insomnia walkthrough to view GET, POST, PULL, DELETE API routes
<insert Screencastify link>

## Collections


## Contribution

ktrnthsnr

### ©️2020 ktrnthsnr
