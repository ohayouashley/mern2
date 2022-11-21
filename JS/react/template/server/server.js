const port = 8000;
const express = require("express");
const app = express();

app.listen(port, () => console.log(`Party on port: ${port}`));

/* 
npm init -y ##creating project folder
npm install express mongoose cors bcrypt jsonwebtoken ##installing dependencies
npm i -g nodemon ## nodemond auto refreshes server in 
nodemon server.js ## calling dependency we asked for - refreshing every time we save.

*/
