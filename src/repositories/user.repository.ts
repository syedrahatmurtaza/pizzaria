import { IUserNoDoc, IUserSaveDoc } from "../interfaces/user.interface";
import jwt from 'jsonwebtoken'
import { serverSecret } from "../utils/constants";
import { IUserRegisterRequest } from "../types/requests/user.request";
import { IUserRegisterErrorResponse, IUserRegisterResponse } from "../types/responses/user.response";
import { UserModel } from "../models/user.model";
import { IUser } from "../types/document/user.document";

export class UserRepository {
    constructor() {

    }

    async registerUser(request: IUserRegisterRequest): Promise<IUserRegisterResponse | IUserRegisterErrorResponse> {
        const user = UserModel.find().where("email", request.email)
        if (user !== undefined) {
            return <IUserRegisterErrorResponse>{
                errorCode: 500,
                message: "User already registered"
            }
        } else {
            const token = await jwt.sign(request, serverSecret)
            const saveUserObj: IUserSaveDoc = request
            saveUserObj.accessToken = token
            const userNew = await new UserModel(saveUserObj).save()
            return <IUserRegisterResponse | any>userNew
        }
    }

    getAccessToken(user: IUserNoDoc) {
        var tokenFound: string | undefined = jwt.sign(user, serverSecret)
        return tokenFound
    }
}