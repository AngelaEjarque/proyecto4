"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Healtcheck {
    constructor() { }
    run(req, res) {
        res.status(200).send("hola caracola!");
    }
}
exports.default = Healtcheck;
