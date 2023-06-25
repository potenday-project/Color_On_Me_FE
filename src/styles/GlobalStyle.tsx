import { css, Global } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html {
        font-family: "Noto Sans KR", "Inter", sans-serif;
      }
      body,
      #__next {
        height: 100vh;
      }
    `}
  />
);

export default GlobalStyle;
