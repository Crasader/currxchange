import { theme, ThemeProvider} from "../theme/index";
import Head from "./Head";

export default ({ children }) => (
  <div>
    <Head />
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </div>
);
