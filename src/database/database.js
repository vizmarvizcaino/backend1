import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  'proyectsdb',
  'postgres',
  '69720700',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);