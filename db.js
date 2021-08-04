const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize-node-demo', 'postgres', 'postgres', {
	dialect: 'postgres',
	host: 'localhost',
});

module.exports = sequelize;