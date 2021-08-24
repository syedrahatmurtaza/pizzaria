import express, { Application, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import { MongoDb } from './config/db.connection'
import { dbHost, dbName, sPort } from './utils/constants'
import swaggerUi from 'swagger-ui-express'
import { Server } from 'http'
import { MainRouter } from './routes/index.routes'
import swaggerJsDoc from 'swagger-jsdoc'


let server: Server | undefined = undefined

/**
 * This function returns the express application variable
 * @returns app
 */
async function initApplication(): Promise<Application | undefined> {
    const dbStatus = await new MongoDb().connect(dbHost, dbName)

    let app: Application | undefined = undefined
    if (dbStatus) {
        app = express()
    } else {
        console.log("Error With Database Server Exiting")
        app = undefined
    }

    return app;
}

function addMiddlewears(app: Application | undefined) {
    // For Static Files
    app?.use(express.static('public'))

    // For Parsing Request Data
    app?.use(express.urlencoded({ extended: true }))
    app?.use(express.json())

    // For Api Logging
    app?.use(morgan('tiny'))

    // For Swagger (Api Document Creation)
    // const options = {
    //     swaggerOptions: {
    //         url: './swagger.json',
    //         showExplorer: true
    //     },
    //     definition: {
    //         info: {
    //             title: 'Pizzaria (Pizza Delivery Application)',
    //             version: "1.0.0",
    //         }
    //     },
    //     apis: ['./src/routes/*.ts']
    // }

    // // For Swagger (Api Document Creation)
    // const swaggerSpec = swaggerJsDoc(options)

    // // For Swagger (Api Document Creation)
    // app?.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))


    app?.use("/api-docs", swaggerUi.serve, swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
            showExplorer: true
        }
    }))

    // Routes Generated By Tsoa
    // const appRouter: express.Router = express.Router()
    // RegisterRoutes(appRouter)

    // app?.use(appRouter)

    // Custom Routes
    app?.use(MainRouter)

    // To Handle Invalid Request
    app?.all("*", function (req, res, next) {
        // Send The Control To Error Handler
        next(new Error())
    })

    app?.use(
        (err: any, req: Request, res: Response, next: NextFunction) => {
            res.locals.message = err.message;
            const status = err.statusCode || 500;
            console.log(status)
            res.locals.status = status;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            res.status(status);
            return res.json({
                error: {
                    message: err.message
                }
            });
        }
    );
}

async function start() {
    const app = await initApplication()

    // Add Middlewears
    addMiddlewears(app)

    // Listen For The Server
    server = app?.listen(sPort, () => {
        console.log(`Server Is Live On http://localhost:${sPort}`)
    })
}

start()