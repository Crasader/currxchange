import convert from "../convert";
import * as T from "../types";

describe("convert", () => {
  it("converts from the base currency to the target currency", () => {
    const rates = {EUR: 2, GBP: 3, USD: 1};
    expect(convert(rates, T.Currency.USD, T.Currency.EUR, 1)).toEqual(2);
  });
});
