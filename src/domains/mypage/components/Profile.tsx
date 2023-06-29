import Image from "next/image";
import { css } from "@emotion/react";

const Profile = () => {
  return (
    <div css={container}>
      <Image
        css={imageStyles}
        src="/icons/mainCircle.png"
        alt="logo"
        width={58}
        height={58}
      />
      <div>
        <div css={nameStyles}>맹꽁이</div>
        <div css={emailStyles}>abcdefg@naver.com</div>
      </div>
    </div>
  );
};

const container = css`
  display: flex;
  align-items: center;
  gap: 13px;
`;

const imageStyles = css`
  border-radius: 50%;
`;

const nameStyles = css`
  color: #000;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 18px;
`;

const emailStyles = css`
  color: #8e9294;
  font-size: 12px;
  font-family: Pretendard;
  line-height: 18px;
`;

export default Profile;
