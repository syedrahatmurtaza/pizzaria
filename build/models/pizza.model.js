"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaModel = exports.PizzaSchema = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("../utils/constants");
exports.PizzaSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
}, { timestamps: true });
exports.PizzaModel = mongoose_1.model(constants_1.dbColPizza, exports.PizzaSchema);
//# sourceMappingURL=pizza.model.js.map