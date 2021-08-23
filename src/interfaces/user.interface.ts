export interface IUser {
    _id: string,
    email: string,
    // name: string,
    password: string
}

export interface IUserGetAcessTokenReponse {
    accessToken: string
}