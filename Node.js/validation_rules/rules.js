module.exports = {
	SignUp: {
		insertUser: {
			userName: {min:3, max:20,required:true,pattern: /^[a-zA-Z0-9]+$/,message:"User name only support alphabet and number"},
			name: {required: true, message: 'Name cannot be empty'},
			email: {required: true, message:'Email cannot be empty'},
			password:{required:true,message:'Password cannot be empty'},
				reTypePassword:{required:true,message:'Re-Type Password cannot be empty'}
		}
	},
	AddPost:{
		location:{required:true,pattern: /^[a-zA-Z0-9][a-zA-Z0-9 ]+$/},
		holdingNumber:{required:true},
		rent:{required:true,pattern:/^[0-9]/},
		houseType:{required:true},
		bedroom:{required:true,pattern:/^[0-9]/},
		bathroom:{required:true, pattern:/^[0-9]/},
		balcony:{required:true,pattern:/^[0-9]/},
		mobileNo:{required:true,pattern:/^[0-9-+]/},
		drawingroom:{required:true},
		diningroom:{required:true},
		lift:{required:true},
		gas:{required:true},
		generator:{required:true},
		internet:{required:true},
		intercom:{required:true},
		parking:{required:true}

	}
};
