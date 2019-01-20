import * as swap from "../../static/swap.png";

import { StyledExchangeDisplay } from "../theme/StyledExchangeDisplay";
import { StyledExchangeLabel } from "../theme/StyledExchangeLabel";
import ExchangeRateLabel from "./ExchangeRateLabel";

export default ({exchangeRate}) => (
  <StyledExchangeDisplay>
    <ExchangeRateLabel exchangeRate={exchangeRate} />
    <StyledExchangeLabel>
      <img src={swap} />
    </StyledExchangeLabel>
  </StyledExchangeDisplay>
);
