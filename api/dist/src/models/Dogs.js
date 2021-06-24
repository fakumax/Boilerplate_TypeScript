"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogsFactory = exports.Dogs = void 0;
const sequelize_1 = require("sequelize");
class Dogs extends sequelize_1.Model {
}
exports.Dogs = Dogs;
function DogsFactory(sequelize) {
    Dogs.init({
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
        tableName: "dogs",
        sequelize,
    });
    return Dogs;
}
exports.DogsFactory = DogsFactory;
