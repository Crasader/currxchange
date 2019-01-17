import { theme, ThemeProvider} from "../theme/index";

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
