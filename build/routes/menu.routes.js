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
exports.MenuRouter = exports.MenuRoutes = void 0;
const express_1 = __importDefault(require("express"));
const menu_controller_1 = require("../controllers/menu.controller");
class MenuRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.configRoutes();
    }
    configRoutes() {
        // This will create menu
        this.router.post("/createMenu", function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                let menu = req.body;
                let menuCreated = yield new menu_controller_1.MenuController().createMenu(menu);
                res.send(menuCreated);
            });
        });
        // This will add menu item
        this.router.post('/insertMenuItem', function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                let menuWithItem = yield new menu_controller_1.MenuController().insertMenuItem(req.body);
                res.send(menuWithItem);
            });
        });
        // This will return all of the menus
        this.router.post("/getAllMenus", function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                let menus = yield new menu_controller_1.MenuController().getAllMenus();
                res.send(menus);
            });
        });
    }
}
exports.MenuRoutes = MenuRoutes;
exports.MenuRouter = new MenuRoutes().router;
//# sourceMappingURL=menu.routes.js.map