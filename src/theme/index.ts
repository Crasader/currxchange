import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
  >;

export interface IThemeInterface {
  primaryColor: string;
}

export const theme = {
  primaryColor: "#FFF",
};

export { css, keyframes, styled, ThemeProvider };
