import * as E from "../exchange/types";
export interface IWallet {
  exchange: (rates: E.ICurrencies, base: E.Currency, target: E.Currency, exchangeValue: number) => IWallet;
}
