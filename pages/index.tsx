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
  exchangeRate: number;
  rates: E.ICurrencies;
  targetCurrency: E.Currency;
  value: string;
  wallet: W.IWallet;
}

export default class extends React.Component<IIndexProps, IIndexState> {
  public static async getInitialProps() {
    const rates = await getLatestRates();
    return { rates };
  }

  constructor(props) {
    super(props);
    const baseCurrency = E.Currency.USD;
    const rates = props.rates;
    const targetCurrency = E.Currency.EUR;
    this.state = {
      baseCurrency,
      exchangeRate: getExchangeRate(rates, baseCurrency, targetCurrency),
      rates: props.rates,
      targetCurrency,
      value: "",
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
    return (
      <Layout>
        <StyledCurrencyDisplay backgroundColor="#FFF" >
          <CurrencyDropdown
            currency={this.state.baseCurrency}
            handleChange={this.handleChangeCurrency("baseCurrency")}
          />
          <div>
            <input type="text" value={this.state.value} onChange={this.handleChangeValue} />
          </div>
          <CurrencyDisplay value={baseBalance} />
        </StyledCurrencyDisplay>
        <ExchangeContainer exchangeRate={this.state.exchangeRate} handleClick={this.handleSwap}/>
        <StyledCurrencyDisplay backgroundColor="#F3F4F5" >
          <CurrencyDropdown
            currency={this.state.targetCurrency}
            handleChange={this.handleChangeCurrency("targetCurrency")}
          />
          <CurrencyDisplay value={targetBalance} />
        </StyledCurrencyDisplay>
        <Footer handleConvert={this.handleConvert} />
      </Layout>
    );
  }

  private handleChangeValue = (event) => {
    const floatRegExp = new RegExp("^([0-9]+([.][0-9]*)?|[.][0-9]?[0-9]?)$");
    const value = event.target.value;
    if (value === "" || floatRegExp.test(event.target.value)) {
      this.setState({value});
    }
  }

  private handleChangeCurrency = (currencyType: "baseCurrency" | "targetCurrency") => {
    return (newCurrency: string) => {
      if (this.state[currencyType] !== newCurrency) {
        const obj = {};
        obj[currencyType] = newCurrency;
        this.setState(obj, () => {
          this.setState({
            exchangeRate: getExchangeRate(this.state.rates, this.state.baseCurrency, this.state.targetCurrency),
          });
        });
      }
    };
  }

  private handleConvert = () => {
    this.setState({wallet: this.state.wallet.exchange(
      this.state.rates,
      this.state.baseCurrency,
      this.state.targetCurrency,
      Number(this.state.value),
    )});
  }

  private handleSwap = () => {
    this.setState({
      baseCurrency: this.state.targetCurrency,
      exchangeRate: getExchangeRate(this.state.rates, this.state.targetCurrency, this.state.baseCurrency),
      targetCurrency: this.state.baseCurrency,
    });
  }
}
