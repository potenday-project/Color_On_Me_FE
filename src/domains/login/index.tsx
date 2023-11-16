import { css } from "@emotion/react";
import MainLogo from "../shared/components/MainLogo";
import CenteredLayout from "../shared/components/layout/CenteredLayout";
import LoginWithKakao from "./LoginWithKakao";

const LoginPage = () => {
  return (
    <CenteredLayout>
      <main css={homeContainer}>
        <div css={logoPosition}>
          <MainLogo />
        </div>

        <div css={buttonContainer}>
          <LoginWithKakao />
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
  top: 15%;
  width: 26vh;
  height: 26vh;
`;

const buttonContainer = css`
  width: 70%;
  position: absolute;
  bottom: 20%;
`;

export default LoginPage;
