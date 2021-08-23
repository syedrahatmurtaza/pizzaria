"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaController = void 0;
const tsoa_1 = require("tsoa");
const pizza_repository_1 = require("../repositories/pizza.repository");
let PizzaController = class PizzaController extends tsoa_1.Controller {
    constructor() {
        super();
    }
    /**
     * @summary This will add new pizza to the system
     */
    addPizza(reqBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let pizzaAdded = yield new pizza_repository_1.PizzaRepository().addPizza(reqBody);
            return pizzaAdded;
        });
    }
    deletePizza(reqBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let pizzaDeleted = yield new pizza_repository_1.PizzaRepository().deletePizza(reqBody._id);
            return pizzaDeleted;
        });
    }
};
__decorate([
    tsoa_1.Post("/addPizza"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PizzaController.prototype, "addPizza", null);
__decorate([
    tsoa_1.SuccessResponse("200", "Pizza Deleted Succesfully"),
    tsoa_1.Delete("/deletePizza"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PizzaController.prototype, "deletePizza", null);
PizzaController = __decorate([
    tsoa_1.Route("pizza"),
    tsoa_1.Tags("Pizza (CRUD) EndPoints"),
    __metadata("design:paramtypes", [])
], PizzaController);
exports.PizzaController = PizzaController;
//# sourceMappingURL=pizza.controller.js.map