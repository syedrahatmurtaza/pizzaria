import express from 'express'
import jwt from 'jsonwebtoken'
import { UserController } from '../controllers/user.controller'
import { IUserRegisterRequest } from '../types/requests/user.request'
import { serverSecret } from '../utils/constants'
import { MenuRouter } from './menu.routes'
import { PizzaRouter } from './pizza.routes'
import { UserRouter } from './user.routes'

export class IndexRoute {
    router: express.Router

    constructor() {
        this.router = express.Router()
        this.setRoutes()
    }

    setRoutes() {
        // Pizza Routes
        this.router.use("/pizza", this.verifyToken, PizzaRouter)
        this.router.use('/menu', this.verifyToken, MenuRouter)
        this.router.use('/user', UserRouter)
        // Register User Route
        this.router.post("/registerUser", async function (req, res, next) {
            console.log(req.body);

            let user: IUserRegisterRequest = req.body
            let response: any = await new UserController().registerUser(user)
            res.send(response)
        })

        this.router.post("/user/login", async function (req, res, next) {
            console.log(req)
            const token = jwt.sign(req.body, serverSecret)
            res.send(
                token
            )
        })

        this.router.get("/user/login", async function (req, res, next) {
            console.log(req)
            const token = jwt.sign(req.body, serverSecret)
            res.send(token)
        })
    }

    /**
     * Format of the token is 
     * Bearer <acessToken>
     */
    verifyToken(req: any, res: any, next: any) {
        // Get the Auth Header
        const bearerHeader = req.headers['authorization']

        if (bearerHeader !== undefined) {
            console.log(bearerHeader);

            const bearer = bearerHeader.split(" ")

            const bearerToken = bearer[1]

            req.token = bearerToken;

            next()
        } else {
            console.log(bearerHeader);

            res.sendStatus(403)
        }
    }
}

export const MainRouter = new IndexRoute().router