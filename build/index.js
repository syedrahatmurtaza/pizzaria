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
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const db_connection_1 = require("./config/db.connection");
const constants_1 = require("./utils/constants");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const index_routes_1 = require("./routes/index.routes");
let server = undefined;
/**
 * This function returns the express application variable
 * @returns app
 */
function initApplication() {
    return __awaiter(this, void 0, void 0, function* () {
        const dbStatus = yield new db_connection_1.MongoDb().connect(constants_1.dbHost, constants_1.dbName);
        let app = undefined;
        if (dbStatus) {
            app = express_1.default();
        }
        else {
            console.log("Error With Database Server Exiting");
            app = undefined;
        }
        return app;
    });
}
function addMiddlewears(app) {
    // For Static Files
    app === null || app === void 0 ? void 0 : app.use(express_1.default.static('public'));
    // For Parsing Request Data
    app === null || app === void 0 ? void 0 : app.use(express_1.default.urlencoded({ extended: true }));
    app === null || app === void 0 ? void 0 : app.use(express_1.default.json());
    // For Api Logging
    app === null || app === void 0 ? void 0 : app.use(morgan_1.default('tiny'));
    // For Swagger (Api Document Creation)
    app === null || app === void 0 ? void 0 : app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
            showExplorer: true
        }
    }));
    // Custom Routes
    app === null || app === void 0 ? void 0 : app.use(index_routes_1.MainRouter);
    // To Handle Invalid Request
    app === null || app === void 0 ? void 0 : app.all("*", function (req, res, next) {
        // Send The Control To Error Handler
        next(new Error());
    });
    app === null || app === void 0 ? void 0 : app.use((err, req, res, next) => {
        res.locals.message = err.message;
        const status = err.statusCode || 500;
        console.log(status);
        res.locals.status = status;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        res.status(status);
        return res.json({
            error: {
                message: err.message
            }
        });
    });
}
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield initApplication();
        // Add Middlewears
        addMiddlewears(app);
        // Listen For The Server
        server = app === null || app === void 0 ? void 0 : app.listen(constants_1.sPort, () => {
            console.log(`Server Is Live On http://localhost:${constants_1.sPort}`);
        });
    });
}
start();
//# sourceMappingURL=index.js.map