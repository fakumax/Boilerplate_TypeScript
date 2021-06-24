"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../models/index"));
const dogsModel = index_1.default.Dogs;
class dogsControllerClass {
    constructor() {
        this.model = dogsModel;
    }
    getDogs(req, res) {
        dogsModel
            .findAll({
            include: {
                model: index_1.default.Persons,
            },
        })
            .then((dogs) => res.send(dogs))
            .catch((error) => console.error(error));
    }
    getDogById(req, res) {
        const id = req.params.id;
        dogsModel
            .findByPk(id)
            .then((dog) => res.send(dog))
            .catch((error) => console.error(error));
    }
    addDog(req, res) {
        const dog = req.body;
        dogsModel
            .create(dog)
            .then((dog) => res.send(dog))
            .catch((error) => console.error(error));
    }
    addPersonToDog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const personId = req.params.personId;
            const dogId = req.params.dogId;
            console.log(dogId, personId);
            const dog = yield dogsModel.findByPk(dogId);
            if (dog) {
                return dog === null || dog === void 0 ? void 0 : dog.addPerson(+personId).then(() => res.sendStatus(201));
            }
            else
                return res.send("no se pudo crear");
        });
    }
}
const dogsController = new dogsControllerClass();
exports.default = dogsController;
