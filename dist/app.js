"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const User_1 = require("./models/User");
const app = (0, express_1.default)();
//Middlewares
app.use(express_1.default.json());
//Rutas
app.get('/api/users', async (req, res) => {
    const allUsers = await User_1.User.find();
    res.json(allUsers);
});
app.use(routes_1.default);
exports.default = app;
