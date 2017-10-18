// Declarations
var express = require('express')
var exphbs  = require('express-handlebars')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var express = require('express')
var app = express()

mongoose.connect('mongodb://localhost/mission-consultants')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({test: "test", another: "thing", onemore: "another thing"})
})

app.listen(3000, function () {
  console.log('Mission Consultants App listening on port 3000!')
})
