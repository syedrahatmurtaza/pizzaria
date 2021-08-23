import { Body, Controller, Get, Post, Request, Route, Security, Tags } from "tsoa";
import { IUserNoDoc, IUserGetAcessTokenReponse } from "../interfaces/user.interface";
import { UserRepository } from "../repositories/user.repository";
import { IUserRegisterRequest } from "../types/requests/user.request";
import { IUserRegisterErrorResponse, IUserRegisterResponse } from "../types/responses/user.response";

@Route("user")
@Tags("User Routes")
export class UserController extends Controller {
    constructor() {
        super()
    }

    @Post('/registerUser')
    async registerUser(@Body() requestBody: IUserRegisterRequest): Promise<IUserRegisterResponse | IUserRegisterErrorResponse> {
        const response = await new UserRepository().registerUser(requestBody)
        return <IUserRegisterResponse | IUserRegisterErrorResponse>response;
    }

    @Post('/accessToken')
    async getAccessToken(@Body() request: IUserNoDoc): Promise<IUserGetAcessTokenReponse> {
        let tokenFound: string | undefined = await new UserRepository().getAccessToken(request)
        let response = { accessToken: tokenFound };
        return <IUserGetAcessTokenReponse>response;
    }
}