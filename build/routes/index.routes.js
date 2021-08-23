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
exports.MainRouter = exports.IndexRoute = void 0;
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../utils/constants");
const menu_routes_1 = require("./menu.routes");
const pizza_routes_1 = require("./pizza.routes");
const user_routes_1 = require("./user.routes");
class IndexRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.setRoutes();
    }
    setRoutes() {
        // Pizza Routes
        this.router.use("/pizza", this.verifyToken, pizza_routes_1.PizzaRouter);
        this.router.use('/menu', this.verifyToken, menu_routes_1.MenuRouter);
        this.router.use('/user', user_routes_1.UserRouter);
        this.router.post("/user/login", function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(req);
                const token = jsonwebtoken_1.default.sign(req.body, constants_1.serverSecret);
                res.send(token);
            });
        });
        this.router.get("/user/login", function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(req);
                const token = jsonwebtoken_1.default.sign(req.body, constants_1.serverSecret);
                res.send(token);
            });
        });
    }
    /**
     * Format of the token is
     * Bearer <acessToken>
     */
    verifyToken(req, res, next) {
        // Get the Auth Header
        const bearerHeader = req.headers['authorization'];
        if (bearerHeader !== undefined) {
            console.log(bearerHeader);
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            req.token = bearerToken;
            next();
        }
        else {
            console.log(bearerHeader);
            res.sendStatus(403);
        }
    }
}
exports.IndexRoute = IndexRoute;
exports.MainRouter = new IndexRoute().router;
//# sourceMappingURL=index.routes.js.map