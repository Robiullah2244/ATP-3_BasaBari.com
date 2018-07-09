var db = require('./db');
module.exports = {
	validateUser: function(username, password, callback){
		var sql = "SELECT * FROM signin WHERE username=? AND BINARY password=?";
		var sqlParam = [username, password];
		db.executeQuery(sql, sqlParam, function(result){
			if(result.length == 0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	},
	
	getAllAvailablePost: function(callback){
		var sql = "SELECT * FROM houseInformation WHERE Availability='1' ";
		var sqlParam = null;
		db.executeQuery(sql, sqlParam, function(result){
			
			callback(result);
			
		});
	},
	
	getPostById: function(id, callback){
		var sql = "SELECT * FROM houseInformation WHERE id=?";
		var sqlParam = [id];
		db.executeQuery(sql, sqlParam, function(result){
			
			callback(result);
			
		});
	},
	
	getPostUserByHouseId: function(id, callback){
		var sql = "SELECT UserName FROM houseInformation WHERE id=?";
		var sqlParam = [id];
		db.executeQuery(sql, sqlParam, function(result){

			callback(result);
			
		});
	},
	
	booking: function(id, postUserName, bookUserName, callback){
		var date = new Date();
		var sql = "INSERT INTO `book`( `HouseId`, `PostUserName`, `BookUserName`, `BookDate`) VALUES ( ?,?,?,?)";
		var sqlParam = [id, postUserName, bookUserName, date];
		
		db.executeQuery(sql, sqlParam, function(result){
			
			callback(result);
			
		});
	}
	

	
};
