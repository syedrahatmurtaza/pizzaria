"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaRepository = void 0;
const pizza_model_1 = require("../models/pizza.model");
class PizzaRepository {
    constructor() { }
    addPizza(pizza) {
        return new pizza_model_1.PizzaModel(pizza).save();
    }
    deletePizza(_id) {
        return pizza_model_1.PizzaModel.deleteOne({ _id: _id });
    }
}
exports.PizzaRepository = PizzaRepository;
//# sourceMappingURL=pizza.repository.js.map