import { css } from "@emotion/react";
import LoginWithNaver from "./LoginWithNaver";
import MainLogo from "../shared/components/MainLogo";
import CenteredLayout from "../shared/components/layout/CenteredLayout";

const LoginPage = () => {
  return (
    <CenteredLayout>
      <main css={homeContainer}>
        <div css={logoPosition}>
          <MainLogo />
        </div>
        <div css={loginPosition}>
          <LoginWithNaver />
        </div>
      </main>
    </CenteredLayout>
  );
};

const homeContainer = css`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
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
  width: 70%;
  position: absolute;
  bottom: 19%;
`;

export default LoginPage;
