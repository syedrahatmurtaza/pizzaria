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
exports.MenuController = void 0;
const tsoa_1 = require("tsoa");
const menu_repository_1 = require("../repositories/menu.repository");
let MenuController = class MenuController extends tsoa_1.Controller {
    constructor() {
        super();
    }
    /**
     * @summary This will create a new menu in the system
     */
    createMenu(refBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let menu = yield new menu_repository_1.MenuRepository().createMenu(refBody);
            return menu;
        });
    }
    /**
     * @summary This will add new item to the menu
     */
    insertMenuItem(refBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let menu = yield new menu_repository_1.MenuRepository().insertMenuItem(refBody);
            return menu;
        });
    }
    getAllMenus() {
        return __awaiter(this, void 0, void 0, function* () {
            let menus = yield new menu_repository_1.MenuRepository().getAllMenus();
            return menus;
        });
    }
};
__decorate([
    tsoa_1.Post("/createMenu"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "createMenu", null);
__decorate([
    tsoa_1.Post("/insertMenuItem"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "insertMenuItem", null);
__decorate([
    tsoa_1.Security("oAuth2"),
    tsoa_1.Post("/getAllMenus"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "getAllMenus", null);
MenuController = __decorate([
    tsoa_1.Route("menu"),
    tsoa_1.Tags("Menu Creation and Item Addition Endpoints"),
    __metadata("design:paramtypes", [])
], MenuController);
exports.MenuController = MenuController;
//# sourceMappingURL=menu.controller.js.map