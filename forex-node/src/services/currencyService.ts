import { IBaseKeyValue } from './../models/request/IExchange';
import { ICurrencyRate } from './../models/dto/ICurrencyDto';
import { ICurrencyExchangeDto } from '../models/dto/ICurrencyDto';
import { IExchangeQueryParams, IExchangeBase } from '../models/request/IExchange';
import axios, { AxiosResponse } from 'axios';

export default class CurrencyService {

    private static apiDomain: string = 'http://api.exchangeratesapi.io';

    constructor() {}

    private static async Get(uri: string, queryParams?: IExchangeQueryParams)
    {
        let url: string =  `${CurrencyService.apiDomain}/${uri}`;

        return await axios.get(
                url,
                {
                    params: queryParams
                }
            )
            .then((res: AxiosResponse) => {
                return res.data;
            })
            .catch((res) => {
                throw "hello world"
            });
    }

    /**
     * Get the exchange rate for a single value.
     * 
     * @param base 
     * @param symbol, Can be comma separated list eg ZAR,EUR,...
     * 
     * Example
     * 
     *   "base": "ZAR",
     *   "date": "2020-02-25",
     *   "rates": [
     *       {
     *          "exchange": 0.0607352611,
     *          "iso": "EUR",
     *          "converted": 16.464899992008103
     *       },
     *       {
     *          "iso": "USD",
     *          "exchange": 0.065837023,
     *          "converted": 15.189022140323692
     *       }
     *   ]
     *   }
     */
    public static async GetExchangeRate(
        base: string,
        symbols: string
    ) {
        return CurrencyService.ConvertResultToDTO(
            await CurrencyService.Get('latest', {base: base, symbols: symbols})
        );
    }

    /**
     * Quick helper methods to generate a DTO
     * 
     * @param data 
     */
    private static ConvertResultToDTO (data: IExchangeBase): ICurrencyExchangeDto {
        var ratesConverted: ICurrencyRate[] = Object.keys(data.rates).map(function(key: any) {
            let value: number = Number(data.rates[key]);

            return {
                iso: key as string,
                exchange: Number(value.toFixed(3)),
                converted: Number((CurrencyService.CalculateBaseFromExchange(value)).toFixed(3))
            };
        });

        return {
            base: data.base,
            date: data.date,
            rates: ratesConverted
        };
    }

    /**
     * Get value of a currency based on its value compared to the base value.
     * eg USD = 0.066127928 vs ZAR
     * 1 % 0.066127928 = ZAR 15.1222037345
     * 
     * @param currencyValue 
     */
    private static CalculateBaseFromExchange(currencyValue: number): number {
        return 1 / currencyValue;
    }

    
}



