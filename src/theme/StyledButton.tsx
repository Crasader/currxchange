import {styled} from "./index";
export const StyledButton = styled.button`
  display: inline-block;
  line-height: 1.5em;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  cursor: pointer;
  margin-bottom: 0.5em;
  background-color: rgb(235, 0, 141);
  padding: 1em 4.125em;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  border-radius: 2em;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: rgb(210, 0, 126);
  };
`;
