const express = require('express')
const route = express.Router()
const actualityCtrl = require('../controllers/actuality')

const multer = require('../middleware/multer')

route.post('/post', multer, actualityCtrl.post)
route.get('/actus', actualityCtrl.getActus)

module.exports = route