import { css } from "@emotion/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  useEmailDuplicate,
  useSignUp,
} from "../shared/query/auth/auth.queries";
import CenteredLayout from "../shared/components/layout/CenteredLayout";
import Header from "../shared/components/Header";
import Button from "../shared/components/Button";

const SignUpPage = () => {
  const router = useRouter();

  const { mutate: signUpMutate } = useSignUp();
  const { mutate: emailDuplicateMutate } = useEmailDuplicate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const email = watch("email");

  const handleSignUpClick = () => {
    signUpMutate();
  };

  const handleEmailDuplicateClick = (e: any) => {
    e.preventDefault();
    emailDuplicateMutate(email);
  };

  const onSubmit = (data: any) => {
    signUpMutate(data, {
      onSuccess: () => {
        router.push("/login");
      },
    });
  };

  return (
    <CenteredLayout>
      <Header>회원가입</Header>
      <form css={mainContainer} onSubmit={handleSubmit(onSubmit)}>
        <div css={loginContainer}>
          <div css={inputContainer}>
            <div css={inputTitle}>로그인 아이디</div>
            <input
              css={inputStyle}
              type="text"
              placeholder="이메일 입력"
              autoFocus
              {...register("email")}
            />
            <div css={errorStyle} />
            {/* <div css={errorStyle}>※ 사용 가능한 이메일입니다.</div> */}
          </div>
          <button css={duplicateButton} onClick={handleEmailDuplicateClick}>
            중복검사
          </button>
        </div>
        <div css={inputContainer}>
          <div css={inputTitle}>닉네임</div>
          <input
            css={inputStyle}
            type="text"
            placeholder="2~8자 입력"
            {...register("nickname")}
          />
          <div css={errorStyle} />

          {/* <div css={errorStyle}>※ 닉네임은 2~8자로 입력해주세요.</div> */}
        </div>
        <div css={inputContainer}>
          <div css={inputTitle}>비밀번호</div>
          <input
            css={inputStyle}
            type="password"
            placeholder="숫자, 특수문자 포함 8~20자 입력"
            {...register("password")}
          />
          <div css={errorStyle} />
          {/* 
          <div css={errorStyle}>
            ※ 비밀번호는 숫자, 특수문자 포함 8~20자로 입력해주세요.
          </div> */}

          <input
            css={[inputStyle, marginStyle]}
            type="password"
            placeholder="비밀번호 재입력"
            {...register("passwordConfirm")}
          />
          <div css={errorStyle} />
          {/* <div css={errorStyle}>※ 비밀번호가 일치하지 않습니다.</div> */}
        </div>
        <div css={signUpContainer}>
          <Button type="submit" variant="colored" onClick={handleSignUpClick}>
            계정 만들기
          </Button>
        </div>
      </form>
    </CenteredLayout>
  );
};

const marginStyle = css`
  margin-top: 30px;
`;

const mainContainer = css`
  width: 100%;
  height: calc(100% - 63px);
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  gap: 30px;
`;

const loginContainer = css`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
`;

const inputContainer = css`
  width: 100%;
`;

const duplicateButton = css`
  width: 76px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #f4f4f4;
  color: #888;
  text-align: center;
  font-size: 14px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 12px;
`;

const inputTitle = css`
  color: #000;
  font-size: 14px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 11px;
`;

const inputStyle = css`
  width: 100%;
  height: 35px;
  border: none;
  border-bottom: 1px solid #ededed;
  background: #fff;
  flex-shrink: 0;

  color: #888;
  font-size: 14px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  :focus {
    outline: none;
  }
`;

const signUpContainer = css`
  width: 80%;
  margin-top: 10%;
`;

const errorStyle = css`
  color: #005bc6;
  font-size: 10px;
  height: 15px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export default SignUpPage;
