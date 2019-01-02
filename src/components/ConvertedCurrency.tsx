import * as React from "react";

import * as T from "../modules/exchange/types";

export interface IConvertedCurrencyProps {
  targetCurrency: T.Currency;
  value: number;
}

const ConvertedCurrency: React.SFC<IConvertedCurrencyProps> = (props) => (
  <div>
    <div>{props.targetCurrency}</div>
    <div>{props.value}</div>
  </div>
);

export default ConvertedCurrency;
