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
      @font-face {
        font-family: "pretendard";
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
          format("woff");
        font-weight: 400;
        font-style: normal;
      }
    `}
  />
);

export default GlobalStyle;
