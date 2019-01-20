import {styled} from "./index";

export interface IStyledExchangeLabelProps {
  clickable?: boolean;
}

export const StyledExchangeLabel = styled.div<IStyledExchangeLabelProps>`
  border-radius: 10px;
  border: 2px solid #F3F4F5;
  img {
    height: 10px;
    width: 10px;
  };
  cursor: ${(p) => p.clickable ? "pointer" : "default"};
  margin: 5px 0;
  padding: 5px;
  text-align: center;
  width: fit-content;
`;
