const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Title required"],
			minlength: [3, " : Minimum 3 characters"],
		},

		price: {
			type: String,
			required: [true, "Author required"],
			minlength: [3, " : Minimum 3 characters"],
		},

		description: {
			type: String,
			required: [true, "Description required"],
			minlength: [3, " : Minimum 3 characters"],
		},

		saveNum: {
			type: Number,
			default: 0,
			required: [false],
		}, //THIS
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
