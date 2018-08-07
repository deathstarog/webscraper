const express = require('express')
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')
const logger = require('morgan')
const path = require('path')
const cheerio = require('cheerio')
const request = require('request')
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, function(e) {
    if (e) throw e
    console.log(`Listening on PORT ${PORT}`)
})