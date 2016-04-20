'use strict';
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({contactPoints:['127.0.0.1','h2'], keyspace:'test'});

module.exports.client = client;

module.exports.executeReader = function(query, callback, params){
	client.execute(query, params, {prepare:true}, function(err,result){
		if(err) 
		{
			console.log(params);
			console.log(err);
			return({success:false, data:err});
		}
		var res = {success:true, data:result.rows};
		return callback(res);
	});
};

module.exports.executeNonReader = function(query, callback, params){
	client.execute(query, params, {prepare:true}, function(err,result){
		if(err) 
		{
			console.log(params);
			console.log(err);
			return({success:false, data:err});
		}
		return callback({success:true});
	});
};
