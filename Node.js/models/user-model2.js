var db = require('./db');
module.exports = {
	insertUsertoSignIn: function(userName, name,email,password, callback){
		var sql = "INSERT INTO signin VALUES (?,?,2)";
		db.executeQuery(sql, [userName.toLowerCase(),password], function(result){
			callback(result);
		});
	},
	insertUser: function(userName, name,email,password, callback){
		var sql2="INSERT INTO user(UserName, Name,Email) VALUES(?,?,?) ";
		db.executeQuery(sql2, [userName.toLowerCase(),name,email], function(result){
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
		if(d.lat != '')
		{
			console.log(d.lng);
			var sql = "INSERT INTO houseinformation VALUES (null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		//	console.log(d+"INSERTted");
			db.executeQuery(sql, [userName,d.location,d.holdingNumber,d.rent,d.houseType,d.bedroom,
			d.bathroom,d.area,d.balcony,d.drawingroom,d.diningroom,d.parking,d.lift,d.gas,d.generator,d.internet,d.intercom,
			d.mobileNo,d.specialNote,d.houseName,d.postDate,d.houseImageName,0,1,d.lat,d.lng], function(result){
			callback(result);
			});
		}
		else
		{
			console.log("else");
			var sql = "INSERT INTO houseinformation VALUES (null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,0,0)";
	//	console.log(d+"INSERTted");
			db.executeQuery(sql, [userName,d.location,d.holdingNumber,d.rent,d.houseType,d.bedroom,
			d.bathroom,d.area,d.balcony,d.drawingroom,d.diningroom,d.parking,d.lift,d.gas,d.generator,d.internet,d.intercom,
			d.mobileNo,d.specialNote,d.houseName,d.postDate,d.houseImageName,0,1], function(result){
			callback(result);
			});
		}
		
	},
	getNumberOfPostByUserName: function(userName,callback){
		var sql = "SELECT count(*) numberOfPost  from houseinformation where UserName=?";
		db.executeQuery(sql, [userName], function(result){
			callback(result)
		});
	},
	getAllPostByUserName: function(userName,callback){
		var sql = "SELECT * from houseinformation where UserName=?";
		db.executeQuery(sql, [userName], function(result){
			callback(result)
		});
	},
	getNumberOfPostByLocation: function(location,callback){
		var sql = "SELECT count(*) NumberOfPostByLocation FROM houseinformation where Location like '%"+location+"%'";
		db.executeQuery(sql, null, function(result){
			callback(result)
		});
	},
	getAllContactListByUserName: function(userName,callback){
		var sql = "SELECT * FROM message where fromUser=? or toUser=?";
		db.executeQuery(sql, [userName,userName], function(result){
			callback(result)
		});
	}

};
// SELECT count(*) FROM `houseinformation` where Location like '%bani%'

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
