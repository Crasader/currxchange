import { StyledExchangeLabel } from "../theme/StyledExchangeLabel";
export default ({ handleClick }) => (
    <StyledExchangeLabel clickable={true} onClick={handleClick} >
      <img src={swap} />
    </StyledExchangeLabel>
);
