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
exports.UserRouter = exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
class UserRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.configRoutes();
    }
    configRoutes() {
        this.router.post("/accessToken", function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                let user = req.body;
                let resposne = yield new user_controller_1.UserController().getAccessToken(user);
                res.send(resposne);
            });
        });
    }
}
exports.UserRoutes = UserRoutes;
exports.UserRouter = new UserRoutes().router;
//# sourceMappingURL=user.routes.js.map