import express, { response } from 'express'
import { UserController } from '../controllers/user.controller'
import { IUserNoDoc, IUserGetAcessTokenReponse } from '../interfaces/user.interface'
import { IUserRegisterRequest } from '../types/requests/user.request'
import { IUserRegisterResponse } from '../types/responses/user.response'

export class UserRoutes {
    router: express.Router

    constructor() {
        this.router = express.Router()
        this.configRoutes()
    }

    configRoutes() {
        // Validate User Route
        this.router.post("/accessToken", async function (req, res, next) {
            let user: IUserNoDoc = req.body
            let resposne: IUserGetAcessTokenReponse = await new UserController().getAccessToken(user)
            res.send(resposne)
        })

        // Register User Route
        this.router.post("/registerUser", async function (req, res, next) {
            console.log(req.body);

            let user: IUserRegisterRequest = req.body
            let response: any = await new UserController().registerUser(user)
            res.send(response)
        })
    }
}

export const UserRouter = new UserRoutes().router