import { Schema } from "mongoose";

const CartSchema = new Schema({
    name: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    cartItems: [{
        type: Schema.Types.ObjectId,
        ref: "pizza"
    }]
}, { timestamps: true })