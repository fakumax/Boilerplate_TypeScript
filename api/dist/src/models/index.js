"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const Dogs_1 = require("./Dogs");
const Persons_1 = require("./Persons");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DB_NAME, DB_PORT, DB_PASSWORD, DB_HOST, DB_USER } = process.env;
exports.sequelize = new sequelize_1.Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);
const Dogs = Dogs_1.DogsFactory(exports.sequelize);
const Persons = Persons_1.PersonsFactory(exports.sequelize);
Persons.belongsToMany(Dogs, { through: "personsxdogs" });
Dogs.belongsToMany(Persons, { through: "personsxdogs" });
const db = {
    sequelize: exports.sequelize,
    Persons,
    Dogs,
};
exports.default = d;
