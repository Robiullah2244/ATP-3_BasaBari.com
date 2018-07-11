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
	},
	
	increaseViewCount: function(id, callback){
		
		var sql = "UPDATE houseinformation SET TotalView = TotalView + 1 WHERE id=?";
		var sqlParam = [id];
		
		db.executeQuery(sql, sqlParam, function(result){
			
			callback(result);
			
		});
	},
	
	getAllPendingRequestInformationByUserName: function(userName, callback){
		
		var sql = "SELECT Book.BookUserName,Book.PostUserName,Rent,HouseName,BookDate,HouseId,Book.Id FROM Book,HouseInformation WHERE PostUserName=? AND HouseInformation.UserName=? AND BookStatus=?";
		
		
		var sqlParam = [userName,userName,0];
		
		db.executeQuery(sql, sqlParam, function(result){
			
			callback(result);
			
		});
	
	},
	
	setHouseAvailabilityToZero: function(id, callback){
		
		var sql = "UPDATE houseinformation SET Availability = 0 WHERE id=?";
		var sqlParam = [id];
		
		db.executeQuery(sql, sqlParam, function(result){
			
			callback(result);
			
		});
	
	},
	
	
	setBookStatusToOne: function(id, callback){
		
		var sql = "UPDATE Book SET BookStatus = ? WHERE id=?";
		var sqlParam = [1,id];
		
		db.executeQuery(sql, sqlParam, function(result){
			
			callback(result);
			
		});
	
	},
	
	
	deleteFromBookingTable: function(id, callback){
		
		var sql = "Delete From book WHERE HouseId=? AND BookStatus=?";
		var sqlParam = [id,0];
		
		db.executeQuery(sql, sqlParam, function(result){
			
			callback(result);
			
		});
		
	},
	
	getUserByUserName: function(userName, callback){
		
		var sql = "SELECT * FROM User WHERE UserName=? ";
		
		
		var sqlParam = [userName];
		
		db.executeQuery(sql, sqlParam, function(result){
			
			callback(result);
			
		});
		
	},
	
	getPostByUserName: function(userName, callback){
		
		var sql = "SELECT * FROM HouseInformation WHERE UserName=? ";
		
		
		var sqlParam = [userName];
		
		db.executeQuery(sql, sqlParam, function(result){
			
			callback(result);
			
		});
		
	},
	
	getAllApprovedRequestInformationByUserName: function(userName, callback){
		
		var sql = "SELECT * FROM Book,HouseInformation WHERE PostUserName=? AND HouseInformation.UserName=? AND BookStatus=?";
		
		
		var sqlParam = [userName,userName,1];
		
		db.executeQuery(sql, sqlParam, function(result){
			
			callback(result);
			
		});
	
	},
	
	deleteFromHouseInformationByHouseId: function(id, callback){
		
		var sql = "Delete From HouseInformation WHERE Id=?";
		var sqlParam = [id];
		
		db.executeQuery(sql, sqlParam, function(result){
			
			callback(result);
			
		});
		
	},
	
	deleteBookingByHouseId: function(id, callback){
		
		var sql = "Delete From Book WHERE HouseId=? AND BookStatus=?";
		var sqlParam = [id,0];
		
		db.executeQuery(sql, sqlParam, function(result){
			
			callback(result);
			
		});
		
	},
	
	getAllAvailableSearchedPost: function(callback){
		var sql = "SELECT * FROM houseInformation WHERE Availability='1' ";
		var sqlParam = null;
		db.executeQuery(sql, sqlParam, function(result){
			
			callback(result);
			
		});
	},
	
};
