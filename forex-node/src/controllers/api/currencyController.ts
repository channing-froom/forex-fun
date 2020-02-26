import { JsonController, Param, Get} from "routing-controllers";
import CurrencyService from '../../services/currencyService';

@JsonController('/currency')
export default class CurrencyController {
    constructor() {}

    @Get("/:base/values-on/:date/:symbols")
    async getValueOnDate(
        @Param("base") base: string,
        @Param("date") date: string,
        @Param("symbols") symbols: string,
    ) {

        return {"abc": "dgas"};
    }

    @Get("/:base/values/:symbols")
    async getValues(
        @Param("base") base: string,
        @Param("symbols") symbols: string,
    ) {
        try {
            return await CurrencyService.GetExchangeRate(
                base,
                symbols
            );
        } catch (e) {
            console.log('there was a error');

            return {error: "something went wrong"}
        }
    }
}
