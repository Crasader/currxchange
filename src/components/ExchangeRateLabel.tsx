import * as stocks from "../../static/stocks.png";
import { StyledExchangeLabel } from "../theme/StyledExchangeLabel";
export default ({ exchangeRate }) => (
  <StyledExchangeLabel>
    <img src={stocks} />
    {exchangeRate}
  </StyledExchangeLabel>
);
