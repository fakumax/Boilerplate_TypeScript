"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dogsController_1 = __importDefault(require("../controllers/dogsController"));
const dogsRouter = express_1.default.Router();
dogsRouter.get("/", dogsController_1.default.getDogs);
dogsRouter.get("/:id", dogsController_1.default.getDogById);
dogsRouter.post("/", dogsController_1.default.addDog);
dogsRouter.post("/:dogId/person/:personId", dogsController_1.default.addPersonToDog);
exports.default = dogsRouter;
