import getExchangeRate from "../getExchangeRate";
import * as T from "../types";

describe("convert", () => {
  it("converts from the base currency to the target currency", () => {
    const rates = {EUR: 0.5, GBP: 0.75, USD: 1};
    expect(getExchangeRate(rates, T.Currency.USD, T.Currency.EUR)).toEqual(0.5);
  });
});
