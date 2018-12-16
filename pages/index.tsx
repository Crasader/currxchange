import "isomorphic-unfetch";
import * as React from "react";

import { getLatestRates } from "../src/modules/exchange/api";
import { IRates } from "../src/modules/exchange/types";

export interface IIndexProps {
  rates: IRates;
}
export default class extends React.Component<IIndexProps> {
  public static async getInitialProps() {
    const rates = await getLatestRates();
    return { rates };
  }

  public render() {
    return (
      <div>
        {JSON.stringify(this.props.rates)}
      </div>
    );
  }
}
