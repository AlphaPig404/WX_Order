var express = require('express')
var router = express.Router()
var apis = require('../open_api/open_api')

router.get('/restaurants',function(req,res){
	apis.getRestaurants()
})

module.exports = router