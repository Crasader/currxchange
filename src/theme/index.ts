import * as styledComponents from "styled-components";

const {
  default: styled,
  createGlobalStyle,
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

export { createGlobalStyle, css, keyframes, styled, ThemeProvider };
