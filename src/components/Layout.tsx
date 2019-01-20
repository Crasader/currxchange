import * as React from "react";

import { createGlobalStyle } from "../theme/index";
import { StyledContainer } from "../theme/StyledContainer";
import { StyledHeader } from "../theme/StyledHeader";

import Head from "./Head";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
  }
  body {
    font-family: 'Lato', sans-serif;
  }
`;

export default ({ children }) => (
  <div>
    <Head />
    <React.Fragment>
      <GlobalStyle />
      <StyledContainer>
        <StyledHeader>
          <h1>Currency Exchange</h1>
        </StyledHeader>
        {children}
      </StyledContainer>
    </React.Fragment>
  </div>
);
