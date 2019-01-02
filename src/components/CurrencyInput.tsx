import * as React from "react";

import * as T from "../modules/exchange/types";

export interface ICurrencyInputProps {
  currency: T.Currency;
  value: number;
  handleChange: (value: number) => void;
}

export default class extends React.Component<ICurrencyInputProps> {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    return (
      <div>
        <input type="text" value={this.props.value} onChange={this.handleChange} />
      </div>
    );
  }

  private handleChange(event) {
    const newValue = Number(event.target.value);
    if (!isNaN(newValue)) {
      this.props.handleChange(newValue);
    }
  }
}
