import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";

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
  },
  createdOn: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_on'
  }
});

// sequelize.sync({
//   force: true
// });

