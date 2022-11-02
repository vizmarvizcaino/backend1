import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config()
import _config from "../config/config.js";

const env = process.env.ENV;
const config = _config[env];

// create connection
const secuelize = new Sequelize(
  config.database || 'proyectdb',
  config.username || 'postgres',
  config.password || '69720700',
  {
    host: config.host || 'localhost',
    dialect: 'postgres',
    logging: config.logging,
    ssl: true,
    define: {
      timestamps: false
    }
  },
  
);

export default secuelize;
