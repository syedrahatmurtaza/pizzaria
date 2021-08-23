import express from 'express'
import { MenuController } from '../controllers/menu.controller'

export class MenuRoutes {
    router: express.Router

    constructor() {
        this.router = express.Router()
        this.configRoutes()
    }

    configRoutes() {
        // This will create menu
        this.router.post("/createMenu", async function (req, res, next) {
            let menu = req.body
            let menuCreated = await new MenuController().createMenu(menu)
            res.send(menuCreated)
        })

        // This will add menu item
        this.router.post('/insertMenuItem', async function (req, res, next) {
            let menuWithItem = await new MenuController().insertMenuItem(req.body)
            res.send(menuWithItem)
        })

        // This will return all of the menus
        this.router.post("/getAllMenus", async function (req, res, next) {
            let menus = await new MenuController().getAllMenus()
            res.send(menus)
        })
    }
}

export const MenuRouter = new MenuRoutes().router