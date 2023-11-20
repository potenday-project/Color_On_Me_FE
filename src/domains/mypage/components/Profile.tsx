import Image from "next/image";
import { css } from "@emotion/react";
import MainLogo from "@/domains/shared/components/MainLogo";
import { useIsShown } from "@/domains/shared/hooks/useIsShown";
import MyPageQrCode from "./MyPageQrCode";

const Profile = ({
  data,
}: {
  data: { name: string; email: string; profileImageUrl: string };
}) => {
  const [isShown, onOpen, onClose] = useIsShown();

  return (
    <div css={container}>
      <div
        css={css`
          display: flex;
          gap: 15px;
          align-items: center;
        `}
      >
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
      <div onClick={onOpen} css={qrStyles}>
        나의 QR
      </div>
      {isShown && <MyPageQrCode onClose={onClose} />}
    </div>
  );
};

const qrStyles = css`
  border: 1px solid var(--Grayscale-50, #878787);
  padding: 5px 10px;
  border-radius: 30px;
  background: var(--Grayscale-0, #fff);
  color: var(--Grayscale-50, #878787);
  leading-trim: both;
  text-edge: cap;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 150% */
  letter-spacing: -0.14px;
  /* margin-right: 2%; */

  cursor: pointer;
`;

const container = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
