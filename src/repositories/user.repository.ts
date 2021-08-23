import { IUser } from "../interfaces/user.interface";
import jwt from 'jsonwebtoken'
import { serverSecret } from "../utils/constants";

export class UserRepository {
    constructor() {

    }

    getAccessToken(user: IUser) {
        var tokenFound: string | undefined = jwt.sign(user, serverSecret)
        return tokenFound
    }
}