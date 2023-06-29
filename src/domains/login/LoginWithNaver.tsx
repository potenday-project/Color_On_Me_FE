import { css } from "@emotion/react";
import Link from "next/link";
import { BASE_URL } from "../shared/constants/constants";
import KakaoIcon from "public/icons/kakao.svg";

const LoginWithNaver = () => {
  return (
    // <Link href={`${BASE_URL}/auth/login/naver`} css={linkStyle}>
    <Link href={`${BASE_URL}/auth/login/kakao`} css={linkStyle}>
      {/* <div
        css={css`
          width: 270px;
          height: 60px;
        `}
      >
        <Image
          src="https://k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          alt="kakao_login"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div> */}
      {/* <button css={naverLoginButton}>
        <Image
          src="/icons/naverIcon.png"
          alt="naverLogo"
          width={17}
          height={15}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        네이버로 시작하기
      </button> */}
      <button css={kakaoLoginButton}>
        <KakaoIcon
          css={css`
            width: 20px;
            height: 19px;

            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
          `}
        />
        카카오 로그인
      </button>
    </Link>
  );
};

const kakaoLoginButton = css`
  background-color: #ffeb00;
  color: #000000;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  width: 100%;
  height: 50px;
  position: relative;
`;

const linkStyle = css`
  text-decoration: none;
`;

const naverLoginButton = css`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  background: #00c63b;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #fff;
  font-size: 14px;
  font-family: "Pretendard";
  font-weight: 700;

  border: none;
`;

export default LoginWithNaver;
