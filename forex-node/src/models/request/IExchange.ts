

export interface IExchangeQueryParams {
    base?: string,
    symbols?: string
}

export interface IExchangeBase {
    base: string,
    date: string,
    rates: IBaseKeyValue[]
}

export interface IBaseKeyValue {
    [key: string]: number
}
