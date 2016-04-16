'use strict'

let database = require('../config/database');

module.exports.findAll = function(req, res){
	const query = 'SELECT * FROM universities';

	database.executeReader(query, function(result){
		if(result.success)
		{
			res.json(result.data);
		}
		else
		{
			res.send(result.err);
		}
	});	
};

module.exports.getByCode = function(req, res){
	const query = 'SELECT * FROM universities WHERE code = ?';
	let params = [req.params.university_id];

	database.executeReader(query, function(result){
		if(result.success)
		{
			res.json(result.data);
		}
		else
		{
			res.send(result.err);
		}
	}, params);	
};

module.exports.create = function(req, res){
	const query = 'INSERT INTO universities (code, name, website) VALUES (?,?,?)';
	let params = [req.body.code, req.body.name, req.body.website];

	database.executeNonReader(query, function(result){
		if(result.success)
		{
			res.json("Created successfully!");
		}
		else
		{
			res.send(result.err);
		}
	}, params);
};

module.exports.updateByCode = function(req, res){
	const query = 'UPDATE universities SET name = ?, website = ? WHERE code = ?';
	let params = [req.body.name, req.body.website, req.body.code];

	database.executeNonReader(query, function(result){
		if(result.success)
		{
			res.json("Updated successfully!");
		}
		else
		{
			res.send(result.err);
		}
	}, params);
};

module.exports.deleteByCode = function(req, res){
	const query = 'DELETE FROM universities WHERE code = ?';
	let params = [req.params.university_id];
	
	database.executeNonReader(query, function(result){
		if(result.success)
		{
			res.json("Deleted successfully!");
		}
		else
		{
			res.send(result.err);
		}
	}, params);
};