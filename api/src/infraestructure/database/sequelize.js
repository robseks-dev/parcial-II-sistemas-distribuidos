import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const sequelize = new Sequelize (process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});