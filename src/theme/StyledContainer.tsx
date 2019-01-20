import { styled } from "../theme/index";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 40% 1fr 40%;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header header header"
      "main exchange main"
      "footer footer";
  };
`;
