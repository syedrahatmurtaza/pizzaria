"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../utils/constants");
class UserRepository {
    constructor() {
    }
    getAccessToken(user) {
        var tokenFound = jsonwebtoken_1.default.sign(user, constants_1.serverSecret);
        return tokenFound;
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map