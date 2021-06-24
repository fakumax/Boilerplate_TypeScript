"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../models/index"));
const personsModel = index_1.default.Persons;
class personsControllerClass {
    constructor() {
        this.model = personsModel;
    }
    getPersons(req, res) {
        personsModel
            .findAll()
            .then((persons) => res.send(persons))
            .catch((error) => console.error(error));
    }
    getPersonById(req, res) {
        const id = req.params.id;
        personsModel
            .findByPk(id)
            .then((person) => res.send(person))
            .catch((error) => console.error(error));
    }
    addPerson(req, res) {
        const dog = req.body;
        personsModel
            .create(dog)
            .then((dog) => res.send(dog))
            .catch((error) => console.error(error));
    }
}
const personController = new personsControllerClass();
exports.default = personController;
