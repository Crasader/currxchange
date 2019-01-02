import * as React from "react";

import * as T from "../modules/exchange/types";

interface ICurrencyDropdownProps {
  currency: string;
  handleChange: (value: string) => void;
}

interface ICurrencyDropdownState {
  value: string;
}

const CurrencyDropdownOption = (currency: string, key: number) => {
  return <option value={currency} key={key}>{currency}</option>;
};

export default class extends React.Component<ICurrencyDropdownProps, ICurrencyDropdownState> {
  constructor(props) {
    super(props);
    this.state = {value: props.currency};
  }

  public render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          {Object.keys(T.Currency).map((currency, key) => CurrencyDropdownOption(currency, key))}
        </select>
      </div>
    );
  }

  private handleChange = (event) => {
    this.setState({value: event.target.value});
    this.props.handleChange(event.target.value);
  }
}
