"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonsFactory = exports.Persons = void 0;
const sequelize_1 = require("sequelize");
class Persons extends sequelize_1.Model {
}
exports.Persons = Persons;
function PersonsFactory(sequelize) {
    Persons.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: "persons",
        sequelize,
    });
    return Persons;
}
exports.PersonsFactory = PersonsFactory;
