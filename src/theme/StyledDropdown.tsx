import {styled} from "./index";

export const StyledDropdown = styled.div`
  .header {
    border: 2px solid #F3F4F5;
    border-radius: 2px;
    font-size: 40px;
  };
  img {
    height: 40px;
    width: 40px;
  }
  ul {
    border: 2px solid #F3F4F5;
    border-radius: 2px;
    list-style-type: none;
    margin: 0;
    padding: 5px;
  }
  li:hover {
    background-color: rgba(159,131,216,1);
    color: #FFF;
  }
`;
