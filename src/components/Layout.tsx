import * as React from "react";
import { createGlobalStyle, theme, ThemeProvider} from "../theme/index";
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
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        {children}
      </React.Fragment>
    </ThemeProvider>
  </div>
);
