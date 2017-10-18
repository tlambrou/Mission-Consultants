// Declarations
var express = require('express')
var exphbs  = require('express-handlebars')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var express = require('express')
var app = express()

mongoose.connect('mongodb://localhost/mission-consultants')
app.use(express.static('public'))
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./controllers/consultants.js')(app)

app.listen(3000, function () {
  console.log('Mission Consultants App listening on port 3000!')
})
