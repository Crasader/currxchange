import * as React from "react";

import CurrencyDisplay from "../src/components/CurrencyDisplay";
import CurrencyDropdown from "../src/components/CurrencyDropdown";
import ExchangeContainer from "../src/components/ExchangeContainer";
import Footer from "../src/components/Footer";
import Layout from "../src/components/Layout";

import { StyledCurrencyDisplay } from "../src/theme/StyledCurrencyDisplay";

import { getLatestRates } from "../src/modules/exchange/api";
import getExchangeRate from "../src/modules/exchange/getExchangeRate";
import * as E from "../src/modules/exchange/types";

import * as W from "../src/modules/wallet/types";
import Wallet from "../src/modules/wallet/wallet";

export interface IIndexProps {
  rates: E.ICurrencies;
}

export interface IIndexState {
  baseCurrency: E.Currency;
  rates: E.ICurrencies;
  targetCurrency: E.Currency;
  value: number;
  wallet: W.IWallet;
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
      wallet: new Wallet({EUR: 100, GBP: 100, USD: 100}),
    };
  }

  public componentDidMount() {
    setInterval(async () => {
      const rates = await getLatestRates();
      this.setState({ rates });
    }, 10000);
  }

  public render() {
    const baseBalance = this.state.wallet.getBalance(this.state.baseCurrency);
    const targetBalance = this.state.wallet.getBalance(this.state.targetCurrency);
    const exchangeRate = getExchangeRate(this.state.rates, this.state.baseCurrency, this.state.targetCurrency);
    return (
      <Layout>
        <StyledCurrencyDisplay>
          <CurrencyDropdown
            currency={this.state.baseCurrency}
            handleChange={this.handleChangeCurrency("baseCurrency")}
          />
          <div>
            <input type="number" value={this.state.value} onChange={this.handleChangeValue} />
          </div>
          <CurrencyDisplay currency={this.state.baseCurrency} value={baseBalance} />
        </StyledCurrencyDisplay>
        <ExchangeContainer exchangeRate={exchangeRate} handleClick={this.handleSwap}/>
        <StyledCurrencyDisplay>
          <CurrencyDropdown
            currency={this.state.targetCurrency}
            handleChange={this.handleChangeCurrency("targetCurrency")}
          />
          <CurrencyDisplay currency={this.state.targetCurrency} value={targetBalance} />
        </StyledCurrencyDisplay>
        <Footer handleConvert={this.handleConvert} />
      </Layout>
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

  private handleConvert = () => {
    this.setState({wallet: this.state.wallet.exchange(
      this.state.rates,
      this.state.baseCurrency,
      this.state.targetCurrency,
      this.state.value,
    )});
  }

  private handleSwap = () => {
    this.setState({
      baseCurrency: this.state.targetCurrency,
      targetCurrency: this.state.baseCurrency,
    });
  }
}
