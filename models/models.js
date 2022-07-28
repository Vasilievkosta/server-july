const sequelize = require('../bd');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Order = sequelize.define('order', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Master = sequelize.define('master', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, allowNull: false },
	rating: { type: DataTypes.INTEGER, defaultValue: 1 },
});

const City = sequelize.define('city', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, allowNull: false, unique: true },
});


User.hasMany(Order)
Order.belongsTo(User)

City.hasMany(Master)
Master.belongsTo(City)

Master.hasMany(Order)
Order.belongsTo(Master)

module.exports = { User, Order, Master, City };