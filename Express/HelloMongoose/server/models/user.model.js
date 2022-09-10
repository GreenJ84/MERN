const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please make sure to fill out name!"],
		minLength: [4, "Name must be 4 or more characters!"]
	},
	age: {
		type: Number,
		required: [true, "Please make sure to fill out age!"],
		min: [18, "Age must be equal to 18 or greater"]
	}},
	{timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;