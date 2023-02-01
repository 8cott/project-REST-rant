// Modules and Globals
require('dotenv').config()
const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')
const methodOverride = require('method-override')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)
