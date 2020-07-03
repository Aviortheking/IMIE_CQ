var express = require('express')
const IndexController = require('../Controller/IndexController')
const ShopController = require('../Controller/ShopController')
var router = express.Router()

/* GET home page. */
router.get('/', new IndexController().index)

router.get('/shop', new ShopController().index)

module.exports = router
