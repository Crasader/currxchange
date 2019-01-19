import * as E from "../../exchange/types";
import * as T from "../types";
import Wallet from "../wallet";

describe("create wallet", () => {
  const createWallet: (currencies: E.ICurrencies) => () => T.IWallet = (currencies: E.ICurrencies) => {
    return () => new Wallet(currencies);
  };
  it("works with all zero balance", () => {
    const balances = {EUR: 0, GBP: 0, USD: 0};
    expect(createWallet(balances)).not.toThrow();
  });

  it("works with some positive balance", () => {
    const balances = {EUR: 0, GBP: 0, USD: 1};
    expect(createWallet(balances)).not.toThrow();
  });

  it("works with all positive balance", () => {
    const balances = {EUR: 1, GBP: 1, USD: 1};
    expect(createWallet(balances)).not.toThrow();
  });

  it("throws an error for some negative balances", () => {
    const balances = {EUR: 1, GBP: -1, USD: 1};
    expect(createWallet(balances)).toThrow();
  });

  it("throws an error for all negative balances", () => {
    const balances = {EUR: -1, GBP: -1, USD: -1};
    expect(createWallet(balances)).toThrow();
  });
});
