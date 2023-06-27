import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import Image from "next/image";

const LoginWithNaver = () => {
  const naverRef = useRef<HTMLDivElement>(null);

  const loginFormWithNaver = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: process.env.NEXT_PUBLIC_NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 58 },
    });
    naverLogin.init();
  };

  const handleNaverLogin = () => {
    if (!naverRef.current) return;
    const firstChild = naverRef.current.children[0] as HTMLButtonElement;
    if (firstChild) {
      firstChild.click();
    }
  };

  useEffect(() => {
    loginFormWithNaver();
  }, []);

  return (
    <>
      <div ref={naverRef} id="naverIdLogin" css={displayNone} />
      <button css={naverLoginButton} onClick={handleNaverLogin}>
        <Image
          src="/icons/naverIcon.png"
          alt="naverLogo"
          width={17}
          height={15}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        네이버로 시작하기
      </button>
    </>
  );
};

const displayNone = css`
  display: none;
`;

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
