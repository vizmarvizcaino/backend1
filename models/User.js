import { DataTypes, Sequelize  } from "sequelize";
import  sequelize from "../database/database.js";
import { Role } from "../models/Role.js";

export const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  ocupation: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  createdOn: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_on'
  }
});

// User.belongsTo(Role, {
//   foreignKey: {
//     allowNull: false,
//     field: 'role_id'
//   },
//   onDelete: 'CASCADE'
// });

// Role.hasMany(User, {
//   onDelete: 'CASCADE',
// });

// sequelize.sync({
//     force: true
// });

// npx sequelize-cli db:migrate:undo:all 
