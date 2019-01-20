import { StyledExchangeDisplay } from "../theme/StyledExchangeDisplay";

import ExchangeRateLabel from "./ExchangeRateLabel";
import SwapButton from "./SwapButton";

export interface IExchangeContainerProps {
  exchangeRate: number;
  handleClick: () => void;
}

export default ({exchangeRate, handleClick}: IExchangeContainerProps) => (
  <StyledExchangeDisplay>
    <ExchangeRateLabel exchangeRate={exchangeRate} />
    <SwapButton handleClick={handleClick} />
  </StyledExchangeDisplay>
);
