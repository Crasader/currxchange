import * as React from "react";

export interface IConvertedCurrencyProps {
  baseCurrency: string;
  targetCurrency: string;
  value: number;
}

export interface IConvertedCurrencyState {
  value: number;
}

export default class extends React.Component<IConvertedCurrencyProps, IConvertedCurrencyState> {
  constructor(props) {
    super(props);
    this.state = {value: props.value};
  }

  public render() {
    return (
      <div>
        <div>{this.props.targetCurrency}</div>
        <div>{this.state.value}</div>
      </div>
    );
  }

}
