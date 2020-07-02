var express = require('express')
const IndexController = require('../Controller/IndexController')
var router = express.Router()

/* GET home page. */
router.get('/', new IndexController().index)

module.exports = router
