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
exports.PizzaRouter = void 0;
const express_1 = __importDefault(require("express"));
const pizza_controller_1 = require("../controllers/pizza.controller");
class PizzaRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.configRoutes();
    }
    configRoutes() {
        // Add Pizza
        this.router.post("/addPizza", function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                let pizzaAdded = yield new pizza_controller_1.PizzaController().addPizza(req.body);
                res.send(pizzaAdded);
            });
        });
        this.router.delete("/deletePizza", function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                let deletedPizza = yield new pizza_controller_1.PizzaController().deletePizza(req.body);
                res.send(deletedPizza);
            });
        });
    }
}
exports.PizzaRouter = new PizzaRoutes().router;
//# sourceMappingURL=pizza.routes.js.map