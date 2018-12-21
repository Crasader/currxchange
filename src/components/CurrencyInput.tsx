import * as React from "react";

export interface ICurrencyInputProps {
  currency: string;
  value: number;
  handleChange: (value: number) => void;
}

export interface ICurrencyInputState {
  value: number;
}

export default class extends React.Component<ICurrencyInputProps, ICurrencyInputState> {
  constructor(props) {
    super(props);
    this.state = {value: props.value};
  }

  public render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
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
