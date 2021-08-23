export interface IUserRegisterResponse {
    _id: string,
    name: string,
    email: string,
    password: string,
    accessToken: string,
    createdAt: string,
    updatedAt: string,
}

export interface IUserRegisterErrorResponse {
    errorCode: number,
    message: string
}