const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("asi_spring", "root", "piza77", {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

module.exports = sequelize;