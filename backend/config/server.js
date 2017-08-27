const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function(){
  console.log(`BACKEND is runing on port ${port}`)
})

module.exports = server
/*
middleware concept:
server.use(function(req, res, next){
  console.log('meu middleware 1');
  next()
})

server.use(function(req, res, next) {
  console.log("middleware 2 funcionou");
  res.send("funcionou denovo")
})
*/
