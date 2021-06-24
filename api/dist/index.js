"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./src/routes/index"));
const index_2 = require("./src/models/index");
const app = express_1.default();
// primero yo quiero declarar como tienen que ser los headers
app.use(express_1.default.urlencoded({ extended: true, limit: "50mb" }));
app.use(express_1.default.json({ limit: "50mb" }));
app.use(morgan_1.default("dev"));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
app.use("/api", index_1.default);
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
index_2.sequelize
    .sync({ force: true })
    .then(() => {
    console.log("nos conectamos a la base de datos :D");
    app.listen(3000, () => {
        console.log("Che, el servidor esta andando en el puerto 3000");
    });
})
    .catch((err) => console.error(err));
