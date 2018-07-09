module.exports = {
	SignUp: {
		insertUser: {
			userName: {min:3, max:20,required:true,pattern: /^[a-zA-Z0-9]+$/,message:"User name only support alphabet and number"},
			name: {required: true, message: 'Name cannot be empty'},
			email: {required: true, message:'Email cannot be empty'},
			password:{required:true,message:'Password cannot be empty'},
				reTypePassword:{required:true,message:'Re-Type Password cannot be empty'}
		}
	}
};
