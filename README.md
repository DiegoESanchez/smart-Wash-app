# smart-Wash-app

# Description
Smart wash app allows to the users to send their clothes to an laundry mat, and a delivery guy is gonna pick the clothes and take it back home.

# Instructions
1. Perform a Git Fork on the repository
2. Perform a Git Clone from your Github Repo to create a local clone of the project
3. Change Directory to the folder where you created the clone
4. Install nodemon by typing 'npm install  nodemon'
5. Install all the projects dependencies by performing an npm install by typing 'npm install'
6. In the same terminal window, type 'npm run react-dev'. This will start webpack for transpilation of your jsx files
7. In a new terminal window, type 'npm run start'. This will start express web server for your site
8. Open a browser window and enter http://localhost:3000 as the URL and you should see the main page of the site
9. Before you begin coding you should always open and view all of the files and folders provided in this project repo and try and understand each one.

## Express.js
For this project you will not be using live server but instead a local server has been setup for you
using Express.js. You don't need to worry about the details of the express server at this point.

## Nodemon
You will also be using an npm package called nodemon which will watch files in your application directory
and restart your web server (Express.js) automagically. In order to run nodemon, follow step's #4 and #7 above in the instructions.

## Webpack
Instead of running a manual babel transpiler (with a watch command) you will instead use a package called Webpack.
Webpack has the ability to perform many functions but for this project it will simply watch and automatically transpile your jsx files
using the react and es2015 presets. It will take all of your transpiled files and combine them into a single filed called bundle.js
Your bundle.js is linked via your index.html. You will perform the steps needed to run Webpack by performing step #5 and step #6 above.
