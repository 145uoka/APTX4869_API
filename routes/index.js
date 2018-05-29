
var money = require('./money');

/*
 * GET home page.
 */

exports.index = function(req, res){
	money.create;
  res.render('index', { title: 'Express' });
};