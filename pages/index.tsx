import "isomorphic-unfetch";
import * as React from "react";

import { getLatestRates } from "../src/modules/exchange/api";
import { IRates } from "../src/modules/exchange/types";

export interface IIndexProps {
  rates: IRates;
}

export interface IIndexState {
  baseCurrency: string;
  exchangeCurrency: string;
}

export default class extends React.Component<IIndexProps, IIndexState> {
  public static async getInitialProps() {
    const rates = await getLatestRates();
    return { rates };
  }

  constructor(props) {
    super(props);
    this.state = {
      baseCurrency: "USD",
      exchangeCurrency: "EUR",
    };
  }

  public render() {
    return (
      <div>
        <h1>Exchange</h1>
        <div>base curr</div>
        <div>exchange curr</div>
      </div>
    );
  }
}
