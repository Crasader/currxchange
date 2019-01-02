import * as React from "react";

import ConvertedCurrency from "../src/components/ConvertedCurrency";
import CurrencyDropdown from "../src/components/CurrencyDropdown";
import CurrencyInput from "../src/components/CurrencyInput";

import { getLatestRates } from "../src/modules/exchange/api";
import convert from "../src/modules/exchange/convert";
import * as T from "../src/modules/exchange/types";

export interface IIndexProps {
  rates: T.IRates;
}

export interface IIndexState {
  baseCurrency: T.Currency;
  targetCurrency: T.Currency;
  value: number;
}

export default class extends React.Component<IIndexProps, IIndexState> {
  public static async getInitialProps() {
    const rates = await getLatestRates();
    return { rates };
  }

  constructor(props) {
    super(props);
    this.state = {
      baseCurrency: T.Currency.USD,
      targetCurrency: T.Currency.EUR,
      value: 1,
    };
  }

  public render() {
    return (
      <div>
        <h1>Exchange</h1>
        <CurrencyDropdown
          currency={this.state.baseCurrency}
          handleChange={this.handleChangeCurrency("baseCurrency")}
        />
        <CurrencyInput
          value={ this.state.value }
          currency={ this.state.baseCurrency } handleChange={this.handleChangeValue}
        />
        <CurrencyDropdown
          currency={this.state.targetCurrency}
          handleChange={this.handleChangeCurrency("targetCurrency")}
        />
        <ConvertedCurrency
          targetCurrency={ this.state.targetCurrency }
          value={ convert(this.props.rates, this.state.baseCurrency, this.state.targetCurrency, this.state.value) }
        />
      </div>
    );
  }

  private handleChangeValue = (value: number) => {
    this.setState({value});
  }

  private handleChangeCurrency = (currencyType: "baseCurrency" | "targetCurrency") => {
    return (newCurrency: string) => {
      if (this.state[currencyType] !== newCurrency) {
        const obj = {};
        obj[currencyType] = newCurrency;
        this.setState(obj);
      }
    };
  }
}
