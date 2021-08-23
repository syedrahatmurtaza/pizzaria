import { Body, Controller, Post, Route, Security, Tags } from "tsoa";
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

    /**
     * @summary This will create a new menu in the system
     */
    @Post("/createMenu")
    async createMenu(@Body() refBody: IMenuCreateRequest): Promise<IMenuCreateResponse> {
        let menu: any = await new MenuRepository().createMenu(<IMenu>refBody)
        return <IMenuCreateResponse>menu;
    }

    /**
     * @summary This will add new item to the menu 
     */
    @Post("/insertMenuItem")
    async insertMenuItem(@Body() refBody: IMenuInsertItemRequest): Promise<IMenuInsertItemResponse> {
        let menu: any = await new MenuRepository().insertMenuItem(refBody)
        return <IMenuInsertItemResponse>menu
    }

    @Security("oAuth2")
    @Post("/getAllMenus")
    async getAllMenus(): Promise<IMenuGetAllMenuResponse[]> {
        let menus: any = await new MenuRepository().getAllMenus()
        return menus
    }
}