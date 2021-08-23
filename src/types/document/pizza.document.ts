import { LargeNumberLike } from "crypto";
import { Document } from "mongoose";

export interface IPizza extends Document {
    _id: string,
    name: string,
    size: string,
    price: number,
    createdAt?: string,
    updatedAt?: string
}