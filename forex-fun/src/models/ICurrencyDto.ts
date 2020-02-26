export interface ICurrencyExchangeDto {
    rates : ICurrencyRate[],
    base: string,
    date: string
}

export interface ICurrencyRate {
    iso: string,
    exchange: number,
    converted: number
}
