import { model, Schema } from "mongoose";
import { IMenu } from "../types/document/menu.document";
import { dbColMenu } from "../utils/constants";

const MenuSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: "pizza"
            }
        ]
    },
    { timestamps: true }
)

export const MenuModel = model<IMenu>(dbColMenu, MenuSchema)