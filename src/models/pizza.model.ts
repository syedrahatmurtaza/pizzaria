import { model, Schema } from "mongoose";
import { IPizza } from "../types/document/pizza.document";
import { dbColPizza } from "../utils/constants";

export const PizzaSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        size: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
    }, { timestamps: true }
)

export const PizzaModel = model<IPizza>(dbColPizza, PizzaSchema)