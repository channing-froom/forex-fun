import { JsonController, Param, Get} from "routing-controllers";
import CurrencyService from '../../services/currencyService';

@JsonController('/currency')
export default class CurrencyController {
    constructor() {}

    /**
     * 
     * @param base 
     * @param date 
     * @param symbols 
     */
    @Get("/:base/values-on/:date/:symbols")
    async getValueOnDate(
        @Param("base") base: string,
        @Param("date") date: string,
        @Param("symbols") symbols: string,
    ) {

        return {"abc": "dgas"};
    }

    /**
     * 
     * @param base 
     * @param symbols 
     */
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
            // TODO manage errors correctly & status codes
        }
    }
}
