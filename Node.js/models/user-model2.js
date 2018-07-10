var db = require('./db');
module.exports = {
	insertUsertoSignIn: function(userName, name,email,password, callback){
		var sql = "INSERT INTO signin VALUES (?,?,2)";
		db.executeQuery(sql, [userName,password], function(result){
			callback(result);
		});
	},
	insertUser: function(userName, name,email,password, callback){
		var sql2="INSERT INTO user(UserName, Name,Email) VALUES(?,?,?) ";
		db.executeQuery(sql2, [userName,name,email], function(result){
			callback(result);
		});
	},
	getMaxHouseInformationId: function(callback){
		var sql = "SELECT MAX(id) maxID  from houseinformation";
		db.executeQuery(sql, null, function(result){
			callback(result)
		});
	},
	addPostToDb:function(userName,d,callback){
		var sql = "INSERT INTO houseinformation VALUES (null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		console.log(d+"INSERTted");
		db.executeQuery(sql, [userName,d.location,d.holdingNumber,d.rent,d.houseType,d.bedroom,
		d.bathroom,d.area,d.balcony,d.drawingroom,d.diningroom,d.parking,d.lift,d.gas,d.generator,d.internet,d.intercom,
		d.mobileNo,d.specialNote,d.houseName,d.postDate,d.houseImageName,0,1], function(result){
			callback(result);
		});
	}
};

// var db = require('./db');
// module.exports = {
// 	validateUser: function(username, password, callback){
// 		var sql = "SELECT * FROM signin WHERE username=? AND BINARY password=?";
// 		var sqlParam = [username, password];
// 		db.executeQuery(sql, sqlParam, function(result){
// 			if(result.length == 0)
// 			{
// 				callback(false);
// 			}
// 			else
// 			{
// 				callback(true);
// 			}
// 		});
// 	}
// };
