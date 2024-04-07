require ("dotenv").config();

const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, BDD } = process.env;
const AppointmentsModel = require("./models/Appointments");
const UsersModel = require("./models/Users");



const database = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${BDD}`,
    { logging: false }
);

//Pasando el argumento database, a las funciones que definen los modelos
AppointmentsModel(database);
UsersModel(database);

//Relaciones de las tablas
const { Appointments, Users } = database.models;

Appointments.belongsToMany(Users, { through: "UsersAppointments" });
Users.belongsToMany(Appointments, { through: "UsersAppointments" });

module.exports = {
    database,
...database.models,
};