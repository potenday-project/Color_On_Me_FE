import { css } from "@emotion/react";
import Image from "next/image";

const MainLogo = () => {
  return (
    <div css={mainLogoContainer}>
      <div css={circleImageContainer}>
        <Image
          css={circleImage}
          src="/icons/mainCircle.png"
          alt="logo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div css={logoImageContainer}>
        <Image
          css={logoImage}
          src="/icons/mainLogo.png"
          alt="logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

const mainLogoContainer = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const circleImageContainer = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

const circleImage = css`
  border-radius: 50%;
  position: absolute;
`;

const logoImageContainer = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 85%;
  height: 85%;
`;

const logoImage = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default MainLogo;
