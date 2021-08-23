import { PizzaModel } from "../models/pizza.model";
import { IPizza } from "../types/document/pizza.document";

export class PizzaRepository {
    constructor() { }

    addPizza(pizza: IPizza) {
        return new PizzaModel(pizza).save()
    }

    deletePizza(_id: string) {
        return PizzaModel.deleteOne({ _id: _id })
    }
}