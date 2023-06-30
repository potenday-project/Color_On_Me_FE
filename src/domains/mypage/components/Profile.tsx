import Image from "next/image";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import client from "@/domains/shared/api/client";
import MainLogo from "@/domains/shared/components/MainLogo";

const Profile = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // const fetchUser = async () => {
    //   const responseUser = await client.get("users");
    //   setUser(responseUser);
    // };
    // fetchUser();
  }, []);

  return (
    <div css={container}>
      <div
        css={css`
          width: 58px;
          height: 58px;
        `}
      >
        <MainLogo />
      </div>
      {/* <Image
        css={imageStyles}
        src={
          user?.profileImageUrl ? user?.profileImageUrl : "/images/profile.png"
        }
        alt="logo"
        width={58}
        height={58}
      /> */}
      <div>
        <div css={nameStyles}>{user?.name ? user?.name : "맹꽁이"}</div>
        <div css={emailStyles}>
          {user?.email ? user?.email : "365support@naver.com"}
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
