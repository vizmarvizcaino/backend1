import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Task } from "./Task.js"

export const Proyect = sequelize.define('proyects', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  priority: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  }
});

Proyect.hasMany(Task, {
  foreignKey: 'proyect_id',
  sourceKey: 'id'
})

Task.belongsTo(Proyect, {
  foreignKey: 'proyect_id',
  targetId: 'id'
})