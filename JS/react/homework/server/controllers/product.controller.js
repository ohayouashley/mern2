const Product = require("../models/product.models");

module.exports = {
	createProduct: (req, res) => {
		Product.create(req.body)
			.then((newProduct) => res.json(newProduct))
			.catch((e) => res.status(400).json(e));
	},

	getAllProducts: (req, res) => {
		Product.find({})
			.then((allProducts) => {
				console.log(allProducts);
				res.json(allProducts);
			})
			.catch((e) => res.status(400).json(e));
	},

	getOneProduct: (req, res) => {
		Product.findOne({ _id: req.params.id }).then((oneProduct) => {
			console.log(oneProduct);
			res.json(oneProduct);
		});
	},

	updateProduct: (req, res) => {
		Product.findOneAndUpdate({ _id: req.params.id }, req.body.item, {
			new: true,
			runValidators: true,
		})
			.then((e) => res.json(e))
			.catch((e) => res.status(400).json(e));
	},

	deleteProduct: (req, res) => {
		Product.deleteOne({ _id: req.params.id })
			.then((e) => res.json(e))
			.catch((e) => res.status(400).json(e));
	},

	incLikes: (req, res) => {
		Product.findOneAndUpdate(
			{ _id: req.params.id },
			{ $inc: { saveNum: 1 } },
			{
				new: true,
			}
		)
			.then((e) => res.json(e))
			.catch((e) => res.status(400).json(e));
	},
};
