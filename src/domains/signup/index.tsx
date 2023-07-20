import { useState } from "react";
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

  const [emailDuplicate, setEmailDuplicate] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm();

  const email = watch("email");

  const handleSignUpClick = () => {
    signUpMutate();
  };
  const handleEmailDuplicateClick = (e: any) => {
    e.preventDefault();
    if (email === "") {
      setEmailDuplicate("empty");
    } else if (!emailRegex.test(email)) {
      setEmailDuplicate("invalid");
    } else {
      emailDuplicateMutate(email, {
        onSuccess: () => {
          setEmailDuplicate("available");
        },
        onError: () => {
          setEmailDuplicate("duplicated");
        },
      });
    }
  };

  const onSubmit = (data: any) => {
    if (email === "") {
      setEmailDuplicate("empty");
    } else if (!emailRegex.test(email)) {
      setEmailDuplicate("invalid");
    }
    if (!emailDuplicate) return;

    signUpMutate(data, {
      onSuccess: () => {
        router.push("/login");
      },
    });
  };

  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[0-9]).{8,20}$/;
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

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
              {...register("email", { required: true, pattern: emailRegex })}
            />
            {(emailDuplicate === "empty" ||
              errors.email?.type === "required") && (
              <div css={errorStyle}>※ 이메일을 입력해주세요.</div>
            )}

            {emailDuplicate === "invalid" && (
              <div css={errorStyle}>※ 유효한 이메일을 입력해주세요.</div>
            )}
            {emailDuplicate === "duplicated" && (
              <div css={errorStyle}>※ 이미 존재하는 이메일입니다.</div>
            )}
            {emailDuplicate === "available" && (
              <div css={successStyle}>※ 사용 가능한 이메일입니다.</div>
            )}
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
            {...register("nickname", {
              required: true,
              minLength: 2,
              maxLength: 8,
            })}
          />
          <div css={errorStyle}>
            {errors.nickname && (
              <div css={errorStyle}>※ 닉네임은 2~8자 사이로 입력해주세요.</div>
            )}
          </div>
        </div>
        <div css={inputContainer}>
          <div css={inputTitle}>비밀번호</div>
          <input
            css={inputStyle}
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8~20자 입력"
            {...register("password", {
              required: true,
              pattern: {
                value: passwordRegex,
                message:
                  "※ 비밀번호는 영문, 숫자, 특수문자 포함 8~20자로 입력해주세요.",
              },
            })}
          />
          {errors.password && (
            <div css={errorStyle}>
              ※ 비밀번호는 숫자, 특수문자 포함 8~20자로 입력해주세요.
            </div>
          )}

          <input
            css={[inputStyle, marginStyle]}
            type="password"
            placeholder="비밀번호 재입력"
            {...register("passwordConfirm", {
              required: "비밀번호는 필수 입력입니다.",
              pattern: {
                value: passwordRegex,
                message:
                  "※ 비밀번호는 영문, 숫자, 특수문자 포함 8~20자로 입력해주세요.",
              },
              validate: {
                check: (val) => {
                  if (getValues("password") !== val) {
                    return "비밀번호가 일치하지 않습니다.";
                  }
                },
              },
            })}
          />

          <div css={errorStyle}>
            {errors.passwordConfirm && "※ 비밀번호가 일치하지 않습니다."}
          </div>
          <div css={errorStyle} />
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            width: 100%;
          `}
        >
          <a
            href="https://husky-justice-125.notion.site/6e6e8ba6d2af42f9beb859d9fd3fbfce"
            target="_blank"
            rel="noopener noreferrer"
            css={linkButton}
          >
            개인정보 처리 방침
          </a>
          <a
            href="https://husky-justice-125.notion.site/08c08f5bc9d64bef8f419ca5860b236b"
            target="_blank"
            rel="noopener noreferrer"
            css={linkButton}
          >
            서비스 이용 약관
          </a>
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

const successStyle = css`
  color: #005bc6;
  font-size: 10px;
  height: 15px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const errorStyle = css`
  color: #e10000;
  font-size: 10px;
  height: 15px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const linkButton = css`
  width: 100%;
  color: #8e9294;
  font-size: 12px;
  font-family: "Pretendard";
  width: fit-content;
`;

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

export default SignUpPage;
