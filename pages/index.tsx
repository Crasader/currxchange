import * as React from "react";

import ConvertedCurrency from "../src/components/ConvertedCurrency";
import CurrencyDropdown from "../src/components/CurrencyDropdown";

import { getLatestRates } from "../src/modules/exchange/api";
import convert from "../src/modules/exchange/convert";
import * as E from "../src/modules/exchange/types";

export interface IIndexProps {
  rates: E.ICurrencies;
}

export interface IIndexState {
  baseCurrency: E.Currency;
  rates: E.ICurrencies;
  targetCurrency: E.Currency;
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
      baseCurrency: E.Currency.USD,
      rates: props.rates,
      targetCurrency: E.Currency.EUR,
      value: 1,
    };
  }

  public componentDidMount() {
    setInterval(async () => {
      const rates = await getLatestRates();
      this.setState({ rates });
    }, 10000);
  }

  public render() {
    return (
      <div>
        <h1>Exchange</h1>
        <CurrencyDropdown
          currency={this.state.baseCurrency}
          handleChange={this.handleChangeCurrency("baseCurrency")}
        />
        <div>
          <input type="text" value={this.state.value} onChange={this.handleChangeValue} />
        </div>
        <CurrencyDropdown
          currency={this.state.targetCurrency}
          handleChange={this.handleChangeCurrency("targetCurrency")}
        />
        <ConvertedCurrency
          targetCurrency={ this.state.targetCurrency }
          value={ convert(this.state.rates, this.state.baseCurrency, this.state.targetCurrency, this.state.value) }
        />
      </div>
    );
  }

  private handleChangeValue = (event) => {
    const newValue = Number(event.target.value);
    if (!isNaN(newValue)) {
      this.setState({value: newValue});
    }
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
