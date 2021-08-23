import { connect, connection } from "mongoose";

export class MongoDb {
    constructor() { }

    async connect(host: string, dbName: string): Promise<boolean> {

        let dbStatus: boolean = false

        await connect(`mongodb://${host}/${dbName}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(function () {
            console.log("Database Connection Established")
            dbStatus = true
        }).catch((error) => {
            console.log(error)
            console.log("Error Establishing Connection")
            dbStatus = false
        })

        return dbStatus
    }
}