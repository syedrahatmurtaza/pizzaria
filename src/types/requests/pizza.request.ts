export interface IPizzaAddRequest {
    name: string,
    size: string,
    price: number
}

export interface IPizzaDeleteRequest {
    _id: string
}