import express from 'express'
import { PizzaController } from '../controllers/pizza.controller'

class PizzaRoutes {
    router: express.Router

    constructor() {
        this.router = express.Router()
        this.configRoutes()
    }

    configRoutes() {
        // Add Pizza
        this.router.post("/addPizza", async function (req, res, next) {
            let pizzaAdded = await new PizzaController().addPizza(req.body)
            res.send(pizzaAdded)
        })

        this.router.delete("/deletePizza", async function (req, res, next) {
            let deletedPizza = await new PizzaController().deletePizza(req.body)
            res.send(deletedPizza)
        })
    }
}

export const PizzaRouter = new PizzaRoutes().router