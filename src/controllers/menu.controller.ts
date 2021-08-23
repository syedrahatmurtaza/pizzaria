import { Body, Controller, Example, Post, Route, Security, Tags } from "tsoa";
import { MenuRepository } from "../repositories/menu.repository";
import { IMenu } from "../types/document/menu.document";
import { IMenuCreateRequest, IMenuInsertItemRequest } from "../types/requests/menu.request";
import { IMenuCreateResponse, IMenuGetAllMenuResponse, IMenuInsertItemResponse } from "../types/responses/menu.resposne";


@Route("menu")
@Tags("Menu Creation and Item Addition Endpoints")
export class MenuController extends Controller {
    constructor() {
        super()
    }

    @Example({
        name: "Monday Morning"
    })
    @Post("/createMenu")
    /**
     * @swagger
     * /menu/createMenu:
     *  post:
     *      
     */
    async createMenu(@Body() refBody: IMenuCreateRequest): Promise<IMenuCreateResponse> {
        let menu: any = await new MenuRepository().createMenu(<IMenu>refBody)
        return <IMenuCreateResponse>menu;
    }

    @Post("/insertMenuItem")
    async insertMenuItem(@Body() refBody: IMenuInsertItemRequest): Promise<IMenuInsertItemResponse> {
        let menu: any = await new MenuRepository().insertMenuItem(refBody)
        return <IMenuInsertItemResponse>menu
    }

    @Security("bearerAuth")
    @Post("/getAllMenus")
    async getAllMenus(): Promise<IMenuGetAllMenuResponse[]> {
        let menus: any = await new MenuRepository().getAllMenus()
        return menus
    }
}