import Image from "next/image";
import { css } from "@emotion/react";
import MainLogo from "@/domains/shared/components/MainLogo";

const Profile = ({
  data,
}: {
  data: { name: string; email: string; profileImageUrl: string };
}) => {
  return (
    <div css={container}>
      {data.profileImageUrl ? (
        <Image
          css={imageStyles}
          src={data?.profileImageUrl}
          alt="logo"
          width={58}
          height={58}
        />
      ) : (
        <div css={logoContainer}>
          <MainLogo />
        </div>
      )}
      <div>
        <div css={nameStyles}>{data?.name ? data?.name : "hi"}</div>
        <div css={emailStyles}>
          {data?.email ? data?.email : "365support@naver.com"}
        </div>
      </div>
    </div>
  );
};

const container = css`
  display: flex;
  align-items: center;
  gap: 13px;
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

const logoContainer = css`
  width: 58px;
  height: 58px;
`;

const imageStyles = css`
  border-radius: 50%;
`;

export default Profile;
