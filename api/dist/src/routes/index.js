"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dogs_1 = __importDefault(require("./dogs"));
const persons_1 = __importDefault(require("./persons"));
const router = express_1.default.Router();
router.use("/dogs", dogs_1.default);
router.use("/persons", persons_1.default);
exports.default = router;
