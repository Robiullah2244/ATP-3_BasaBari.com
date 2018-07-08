module.exports = {
	SignUp: {
		insertUser: {
			userName: {required: true, message: 'User Name cannot be empty'},
			name: {required: true, message: 'Name cannot be empty'},
			email: {required: true, message:'Email cannot be empty'},
			password:{required:true,message:'Password cannot be empty'}
		}
	},
	product: {},
	user: {}
};