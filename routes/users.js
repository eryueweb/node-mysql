var express = require('express');
var router = express.Router();
var $userOperate = require('../data/sql/userOperate');
/* GET users listing. */
router.get('/add', function(req, res, next) {
	$userOperate.add(req,res,next)
});
router.get('/delete', function(req, res, next) {
	$userOperate.delete(req,res,next)
});
router.get('/update', function(req, res, next) {
	$userOperate.update(req,res,next)
});
router.get('/search', function(req, res, next) {
	$userOperate.search(req,res,next)
});

module.exports = router;
