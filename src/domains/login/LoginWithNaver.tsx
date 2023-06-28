import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";

const LoginWithNaver = () => {
  return (
    <Link href="http://localhost:8080/auth/login/naver">
      <button css={naverLoginButton}>
        <Image
          src="/icons/naverIcon.png"
          alt="naverLogo"
          width={17}
          height={15}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        네이버로 시작하기
      </button>
    </Link>
  );
};

const naverLoginButton = css`
  width: 75vw;
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
