import { Document } from "mongoose";

export interface ICart extends Document {
    _id: string,
    name: string,
    userId: string,
    cartItems: Array<string>,
    createdAt?: string,
    updatedAt?: string
}