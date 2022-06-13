const Sequelize = require("sequelize");
const connection = require("../database/bd");

const Helicoptero = connection.define(
  "helicoptero",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    modelo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imagem: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    cratedAt: false,
    updateAt: false,
  }
);

module.exports = Helicoptero;
