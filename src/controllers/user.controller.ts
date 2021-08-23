import { Body, Controller, Get, Post, Request, Route, Security, Tags } from "tsoa";
import { IUser, IUserGetAcessTokenReponse } from "../interfaces/user.interface";
import { UserRepository } from "../repositories/user.repository";

@Route("user")
@Tags("Recieve Access Token")
export class UserController extends Controller {
    constructor() {
        super()
    }

    @Post('/accessToken')
    async getAccessToken(@Body() request: IUser): Promise<IUserGetAcessTokenReponse> {
        let tokenFound: string | undefined = await new UserRepository().getAccessToken(request)
        let response = { accessToken: tokenFound };
        return <IUserGetAcessTokenReponse>response;
    }
}