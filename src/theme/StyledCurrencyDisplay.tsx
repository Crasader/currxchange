import {styled} from "./index";

export interface IStyledCurrencyDisplayProps {
  backgroundColor: string;
}
export const StyledCurrencyDisplay = styled.div<IStyledCurrencyDisplayProps>`
  grid-column: span 1;
  background-color: ${(p) => p.backgroundColor};
`;
