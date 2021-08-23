import express, { response } from 'express'
import { UserController } from '../controllers/user.controller'
import { IUser, IUserGetAcessTokenReponse } from '../interfaces/user.interface'

export class UserRoutes {
    router: express.Router

    constructor() {
        this.router = express.Router()
        this.configRoutes()
    }

    configRoutes() {
        this.router.post("/accessToken", async function (req, res, next) {
            let user: IUser = req.body
            let resposne: IUserGetAcessTokenReponse = await new UserController().getAccessToken(user)
            res.send(resposne)
        })
    }
}

export const UserRouter = new UserRoutes().router