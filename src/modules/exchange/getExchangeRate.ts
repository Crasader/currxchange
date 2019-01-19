import * as T from "./types";

export default (rates: T.ICurrencies, base: T.Currency, target: T.Currency): number => rates[base] * rates[target];
