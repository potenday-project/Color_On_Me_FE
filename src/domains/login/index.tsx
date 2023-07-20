import { useState } from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useLogin } from "../shared/query/auth/auth.queries";
import MainLogo from "../shared/components/MainLogo";
import CenteredLayout from "../shared/components/layout/CenteredLayout";
import Button from "../shared/components/Button";
import LoginWithKakao from "./LoginWithKakao";

const LoginPage = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState<JSX.Element | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: loginMutate } = useLogin();

  const onSubmit = (data: any) => {
    loginMutate(data, {
      onSuccess: () => {
        router.push("/");
      },
      onError: () => {
        setLoginError(
          <span>
            이메일 또는 비밀번호를 잘못 입력했습니다.
            <br />
            입력하신 내용을 다시 확인해 주세요.
          </span>
        );
      },
    });
  };

  const isEmailError = errors?.email;
  const isPasswordError = !errors?.email && errors?.password;
  const isCredentialError = !errors.email && !errors.password;

  return (
    <CenteredLayout>
      <main css={homeContainer}>
        <div css={logoPosition}>
          <MainLogo />
        </div>
        <form css={loginPosition} onSubmit={handleSubmit(onSubmit)}>
          <div css={inputContainer}>
            <input
              css={inputStyle}
              type="text"
              placeholder="이메일"
              {...register("email", { required: true })}
            />
            <input
              css={inputStyle}
              type="password"
              placeholder="비밀번호"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <div css={errorStyle}>
            {isEmailError && <span>이메일을 입력해주세요.</span>}
            {isPasswordError && <span>비밀번호를 입력해주세요.</span>}
            {isCredentialError && loginError}
          </div>
          <Button variant="colored">로그인</Button>

          <div css={signupMessage}>
            컬러온미가 처음이신가요?
            <button
              css={signupStyle}
              onClick={(e) => {
                e.preventDefault();
                router.push("/signup");
              }}
            >
              회원가입
            </button>
          </div>
          <div
            css={css`
              width: 100%;
            `}
          ></div>
        </form>
        <div
          css={css`
            width: 70%;
            position: absolute;
            bottom: 10%;
          `}
        >
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

const inputStyle = css`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  background: #fff;
  border: none;
  padding: 0 28px;
  color: #000;
  font-size: 14px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #8e9294;
  }
`;

const loginPosition = css`
  width: 70%;
  position: absolute;
  bottom: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const inputContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const errorStyle = css`
  color: #e10000;
  font-size: 10px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const signupCommonStyle = css`
  color: #2e2e2e;
  font-size: 10px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
`;

const signupMessage = css`
  ${signupCommonStyle}
  margin-top: 16px;
`;

const signupStyle = css`
  ${signupCommonStyle}
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-position: under;
  margin-left: 5px;
`;

export default LoginPage;
