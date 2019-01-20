import * as React from "react";

export interface IExchangeRateProps {
  value: number;
}

const ExchangeRate: React.SFC<IExchangeRateProps> = (props) => (
  <div>
    Balance:
    <span>{props.value.toFixed(2)}</span>
  </div>
);

export default ExchangeRate;
