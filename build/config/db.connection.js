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
exports.MongoDb = void 0;
const mongoose_1 = require("mongoose");
class MongoDb {
    constructor() { }
    connect(host, dbName) {
        return __awaiter(this, void 0, void 0, function* () {
            let dbStatus = false;
            yield mongoose_1.connect(`mongodb://${host}/${dbName}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(function () {
                console.log("Database Connection Established");
                dbStatus = true;
            }).catch((error) => {
                console.log(error);
                console.log("Error Establishing Connection");
                dbStatus = false;
            });
            return dbStatus;
        });
    }
}
exports.MongoDb = MongoDb;
//# sourceMappingURL=db.connection.js.map