import * as T from "./types";

export default (rates: T.ICurrencies, base: T.Currency, target: T.Currency, baseValue: number): number => {
  return baseValue * (rates[target] / rates[base]);
};
