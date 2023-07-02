import { css } from "@emotion/react";
import Image from "next/image";

const Loading = () => {
  return (
    <div css={container}>
      <Image
        src="/images/pontLogo.png"
        alt="pontLogo"
        width={200}
        height={75}
        priority
      />
      <div css={loadingText}>Loading</div>
    </div>
  );
};

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const imageContainer = css`
  width: 200px;
  height: 75px;
`;

const loadingText = css`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

export default Loading;
