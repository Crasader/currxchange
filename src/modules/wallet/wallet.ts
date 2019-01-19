import convert from "../exchange/convert";
import * as E from "../exchange/types";
import {IWallet} from "./types";

export default class Wallet implements IWallet {
  constructor(private balance: E.ICurrencies) {
    if (Object.keys(balance).some((c) => balance[c] < 0)) {
      throw new Error("can't create wallet with negative balance");
    }
  }

  public exchange(rates: E.ICurrencies, base: E.Currency, target: E.Currency, exchangeValue: number): IWallet {
    this.updateBalance(base, -exchangeValue);
    const convertedValue = convert(rates, base, target, exchangeValue);
    this.updateBalance(target, convertedValue);
    return this;
  }

  public getBalance(currency: E.Currency): number {
    return this.balance[currency];
  }

  private updateBalance(currency: E.Currency, difference: number): void {
    if (this.balance[currency] + difference < 0) {
      throw new Error(`invalid operation trying to convert ${currency} to a negative balance`);
    }
    this.balance[currency] += difference;
  }
}
