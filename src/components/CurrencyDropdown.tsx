import * as React from "react";

import * as T from "../modules/exchange/types";

import {StyledDropdown} from "../theme/StyledDropdown";

import chevronDown from "../../static/chevron-down.png";
import chevronUp from "../../static/chevron-up.png";

interface ICurrencyDropdownProps {
  currency: string;
  handleChange: (value: string) => void;
}

interface ICurrencyDropdownState {
  listOpen: boolean;
  value: string;
}

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
          {this.props.currency}
          <img src={this.state.listOpen ? chevronUp : chevronDown} />
        </div>
        {this.state.listOpen && <ul>
          {Object.keys(T.Currency).map((currency, key) => (
            <li onClick={() => this.handleChange(currency)} key={key}>{currency}</li>
          ))}
        </ul>}
      </StyledDropdown>
    );
  }

  private handleChange = (value: string) => {
    this.setState({
      listOpen: false,
      value,
    });
    this.props.handleChange(value);
  }

  private toggleList = () => {
    this.setState({listOpen: !this.state.listOpen});
  }
}
