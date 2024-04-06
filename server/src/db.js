require ("dotenv").config();

const { Sequelize } = require("sequelize");
const { DB_USER,_DB_PASSWORD,_DB_HOST } = process.env;
const Table1 = require("./models/Table1");
const Table2 = require("./models/Table2");

const Sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/template`
);

Table1(sequelize);
Table2(sequelize);


module.exports = {
    Table1,
    Table2,    
}
