var db = require('./db');
module.exports = {
	validateUser: function(username, password, callback){
		var sql = "SELECT * FROM users WHERE username=? AND password=?";
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
	}
};
