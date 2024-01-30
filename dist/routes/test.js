"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const healthcheck_1 = __importDefault(require("../controllers/healthcheck"));
const ctrl = new healthcheck_1.default();
router.get('/hola', ctrl.run);
exports.default = router;
