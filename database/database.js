import { Sequelize } from "sequelize";
import _config from "../config/config.js";
import * as dotenv from 'dotenv';
dotenv.config()

console.log('database',process.env)
const env = process.env.ENV;
const config = _config[env];

// create connection
const secuelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'postgres',
    logging: config.logging,
    define: {
      timestamps: false
    }
  },
  
);

export default secuelize;
