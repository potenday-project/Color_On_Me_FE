import { css } from "@emotion/react";
import LoginWithNaver from "./LoginWithNaver";
import MainLogo from "../shared/components/MainLogo";

const LoginPage = () => {
  return (
    <main css={homeContainer}>
      <div css={logoPosition}>
        <MainLogo />
      </div>
      <div css={loginPosition}>
        <LoginWithNaver />
      </div>
    </main>
  );
};

const homeContainer = css`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(
    134deg,
    #c4a1d7 9.81%,
    #86b3cc 39.06%,
    #8cbbd4 45.31%,
    #fff3ea 85.94%,
    #fff387 100%
  );
`;

const logoPosition = css`
  position: absolute;
  top: 20%;
`;

const loginPosition = css`
  position: absolute;
  bottom: 19%;
`;

export default LoginPage;
