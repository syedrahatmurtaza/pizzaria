import { Body, Controller, Delete, Post, Route, SuccessResponse, Tags } from "tsoa";
import { PizzaRepository } from "../repositories/pizza.repository";
import { IPizza } from "../types/document/pizza.document";
import { IPizzaAddRequest, IPizzaDeleteRequest } from "../types/requests/pizza.request";
import { IPizzaAddResponse, IPizzaDeleteResponse } from "../types/responses/pizza.response";

@Route("pizza")
@Tags("Pizza (CRUD) EndPoints")
export class PizzaController extends Controller {
    constructor() {
        super()
    }

    /**
     * @summary This will add new pizza to the system
     */
    @Post("/addPizza")
    async addPizza(@Body() reqBody: IPizzaAddRequest): Promise<IPizzaAddResponse> {
        let pizzaAdded: IPizza = await new PizzaRepository().addPizza(<IPizza>reqBody)
        return <IPizzaAddResponse>pizzaAdded
    }

    @SuccessResponse("200", "Pizza Deleted Succesfully")
    @Delete("/deletePizza")
    async deletePizza(@Body() reqBody: IPizzaDeleteRequest): Promise<IPizzaDeleteResponse> {
        let pizzaDeleted: any = await new PizzaRepository().deletePizza(reqBody._id)
        return <IPizzaDeleteResponse>pizzaDeleted
    }
}