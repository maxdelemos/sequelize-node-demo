(async () => {

	const database = require('./db');
	const Product = require('./product');
	await database.sync();

	const newProduct = await Product.create({
		name: 'TV FULL HD 65',
		price: 3000,
		description: 'A beautiful tv'
	});
	console.log(newProduct);

	// const products = await Product.findAll({
	// 	where: {
	// 		price: 3000,
	// 	}
	// });
	// console.log(products);

	// const product = await Product.findByPk(1);
	// product.description = 'Beautiful tv';
	// await product.save();
	// console.log(product);

	// const product = await Product.findByPk(1);
	// await product.destroy();

	// await Product.destroy({
	// 	where: {
	// 		price: 3000,
	// 	}
	// });

})();