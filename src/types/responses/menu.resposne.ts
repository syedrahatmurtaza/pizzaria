export interface IMenuCreateResponse {
    _id: string,
    name: string,
    items: Array<string>,
    createdAt: string,
    updatedAt: string
}

export interface IMenuInsertItemResponse {
    _id: string,
    name: string,
    items: Array<string>,
    createdAt: string,
    updatedAt: string
}

export interface IMenuGetAllMenuResponse {
    _id: string,
    name: string,
    items: Array<ISinglePizza>,
    createdAt: string,
    updatedAt: string
}

interface ISinglePizza {
    _id: string,
    name: string,
    size: string,
    price: number,
    createdAt: string,
    updatedAt: string
}