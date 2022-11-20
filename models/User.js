import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../database/database.js";

export const User = sequelize.define('users', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  nombres: {
    type: DataTypes.STRING
  },
  apellidos: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.STRING
  },
  grado: {
    type: DataTypes.STRING
  },
  materia: {
    type: DataTypes.STRING
  },
  nota: {
    type: DataTypes.STRING
  },
  salon: {
    type: DataTypes.STRING
  },
  createdOn: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_on'
  }
});


