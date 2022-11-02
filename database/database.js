import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config()
import _config from "../config/config.js";


const env = process.env.ENV;
const config = _config[env];
const { DATABASE_URL } = process.env

// create connection
const secuelize = new Sequelize(DATABASE_URL,
  {
    logging: false,
    native: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });

export default secuelize;
