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

describe("getBalance", () => {
  const wallet = new Wallet({EUR: 1, GBP: 2, USD: 3});
  it("gets the balance for the EUR", () => {
    expect(wallet.getBalance(E.Currency.EUR)).toBe(1);
  });

  it("gets the balance for the GBP", () => {
    expect(wallet.getBalance(E.Currency.GBP)).toBe(2);
  });

  it("gets the balance for the USD", () => {
    expect(wallet.getBalance(E.Currency.USD)).toBe(3);
  });
});

describe("exchange", () => {
  const balance = ({EUR: 1, GBP: 2, USD: 3});
  const wallet = new Wallet(balance);
  const rates: E.ICurrencies = {EUR: 0.87, GBP: 0.78, USD: 1};

  it("updates balance when converting with enough balance", () => {
    const exchange = 1;
    const newValue = balance.EUR + ((rates.EUR / rates.USD) * exchange);
    const newWallet = wallet.exchange(rates, E.Currency.USD, E.Currency.EUR, exchange);
    expect(newWallet.getBalance(E.Currency.EUR)).toBe(newValue);
  });

  it("throws an error when exchange is bigger than current balance", () => {
    const exchange = 10;
    expect(() => wallet.exchange(rates, E.Currency.USD, E.Currency.EUR, exchange)).toThrow();
  });
});
