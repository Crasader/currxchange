import { StyledButton } from "../theme/StyledButton";
import { StyledFooter } from "../theme/StyledFooter";

export default ({ handleConvert }) => (
  <StyledFooter>
    <StyledButton onClick={handleConvert}>
      Exchange
    </StyledButton>
  </StyledFooter>
);
