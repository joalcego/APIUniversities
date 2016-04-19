'use strict'

let database = require('../config/database');

module.exports.findAll = function(req, res){
	const query = 'SELECT * FROM careers';

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

module.exports.getById = function(req, res){
	const query = 'SELECT * FROM careers WHERE id = ?';
	let params = [req.params.career_id];

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
	const query = 'INSERT INTO careers (id, name, description, universityCode) VALUES (now(),?,?,?)';
	let params = [req.body.name, req.body.description, req.params.university_id];
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

module.exports.updateById = function(req, res){
	const query = 'UPDATE careers SET name = ?, description = ?, universityCode = ? WHERE id = ?';
	let params = [req.body.name, req.body.description, req.params.university_id, req.params.career_id];

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

module.exports.deleteById = function(req, res){
	const query = 'DELETE FROM careers WHERE id = ?';
	let params = [req.params.career_id];
	
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