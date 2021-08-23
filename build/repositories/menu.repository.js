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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuRepository = void 0;
const menu_model_1 = require("../models/menu.model");
const constants_1 = require("../utils/constants");
class MenuRepository {
    constructor() { }
    createMenu(menu) {
        return __awaiter(this, void 0, void 0, function* () {
            menu.items = new Array();
            return yield new menu_model_1.MenuModel(menu).save();
        });
    }
    insertMenuItem(menuIdWithItemId) {
        return __awaiter(this, void 0, void 0, function* () {
            let menu = yield menu_model_1.MenuModel.findById(menuIdWithItemId._id);
            if (menu) {
                menu === null || menu === void 0 ? void 0 : menu.items.push(menuIdWithItemId.item._id);
                menu = yield menu_model_1.MenuModel.findOneAndUpdate({ _id: menu._id }, menu, {
                    returnOriginal: false
                });
            }
            menu = yield menu_model_1.MenuModel.findById(menu === null || menu === void 0 ? void 0 : menu._id);
            return menu;
        });
    }
    getAllMenus() {
        return __awaiter(this, void 0, void 0, function* () {
            let menu = yield menu_model_1.MenuModel.find().populate(constants_1.dbColMenuPopulateItems).exec();
            return menu;
        });
    }
}
exports.MenuRepository = MenuRepository;
//# sourceMappingURL=menu.repository.js.map