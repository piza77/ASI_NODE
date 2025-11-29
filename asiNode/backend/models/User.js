const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("User", {
  id_usu: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom_usu: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  pass_usu: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "users",
  timestamps: false
});

module.exports = User;