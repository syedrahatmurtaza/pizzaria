import { model, Schema } from "mongoose";
import { IUser } from "../types/document/user.document";
import { dbColUser } from "../utils/constants";

const UserSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
        accessToken: String
    },
    {
        timestamps: true,
    }
)

export const UserModel = model<IUser>(dbColUser, UserSchema)