"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const personsController_1 = __importDefault(require("../controllers/personsController"));
const personsRouter = express_1.default.Router();
personsRouter.get("/", personsController_1.default.getPersons);
personsRouter.get("/:id", personsController_1.default.getPersonById);
personsRouter.post("/", personsController_1.default.addPerson);
exports.default = personsRouter;
