import * as React from "react";

import * as T from "../modules/exchange/types";

export interface IExchangeRateProps {
  currency: T.Currency;
  value: number;
}

const ExchangeRate: React.SFC<IExchangeRateProps> = (props) => (
  <div>
    <div>{props.currency}</div>
    <div>{props.value}</div>
  </div>
);

export default ExchangeRate;
