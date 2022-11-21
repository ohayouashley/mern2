//enode npm (node package manager
//)exppress
/* npm init -y ( this initializes our package.json file which is the brain that keeps track of evertything we download (dependencies)) EVERY project
npm i -g nodemon  (so we can do auto refresh)
npm i express (need to install this package for htis particular project)

const express = require('express')
const app = express() (reference express by referencing app throughout out server.)
const PORT = 8000

const 

every route need a path and a callback function

the call back fucntion is req and res (what do they do? 
    objects that contain information about the request and the response)

    hypertext transfer protocol
    HTTP request/response cycle 
    when we go to url /path (/path is an object - a box full of data from one place to another)
    we are sending this to a route - each route has a different function. 
    anytime we have functions that are between two routes they are called middle-ware. 

app.get('/user',(req,res)=> {

}
anytime we have a part of the path with a color :word is going to be added in as parameters. 
if user.id == id 