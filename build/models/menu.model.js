"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModel = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("../utils/constants");
const MenuSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true
    },
    items: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "pizza"
        }
    ]
}, { timestamps: true });
exports.MenuModel = mongoose_1.model(constants_1.dbColMenu, MenuSchema);
//# sourceMappingURL=menu.model.js.map