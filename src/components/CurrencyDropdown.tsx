import * as React from "react";

import * as T from "../modules/exchange/types";

import {StyledDropdown} from "../theme/StyledDropdown";

interface ICurrencyDropdownProps {
  currency: string;
  handleChange: (value: string) => void;
}

interface ICurrencyDropdownState {
  listOpen: boolean;
  value: string;
}

const CurrencyDropdownOption = (currency: string, key: number, handleChange: (currency: string) => void) => {
  return <li onClick={() => handleChange(currency)} key={key}>{currency}</li>;
};

export default class extends React.Component<ICurrencyDropdownProps, ICurrencyDropdownState> {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      value: props.currency,
    };
  }

  public render() {
    return (
      <StyledDropdown>
        <div className="header" onClick={this.toggleList}>
        </div>
        {this.state.listOpen && <ul>
          {Object.keys(T.Currency).map((currency, key) => CurrencyDropdownOption(currency, key, this.handleChange))}
        </ul>}
      </StyledDropdown>
    );
  }

  private handleChange = (event) => {
    this.setState({value: event.target.value});
    this.props.handleChange(event.target.value);
  }

  private toggleList = () => {
    this.setState({listOpen: !this.state.listOpen});
  }
}
