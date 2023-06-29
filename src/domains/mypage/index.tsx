import { useState } from "react";
import { css } from "@emotion/react";
import Header from "../shared/components/Header";
import DefaultLayout from "../shared/components/layout/DefaultLayout";
import TitleText from "../shared/components/TitleText";
import Tag from "../shared/components/Tag";
import Button from "../shared/components/Button";
import Profile from "./components/Profile";
import ColorBox from "./components/ColorBox";

const colors = [
  "#75A0C8",
  "#E39F9F",
  "#A783A3",
  "#A8A8B1",
  "#A3BBA0",
  "#E5E68C",
  "#346D59",
];

const moodTags = ["#차분한", "#지적인", "#잔잔한"];

const MypageView = () => {
  const [isEdit, setIsEdit] = useState(false);

  const headerText = isEdit ? "프로필 수정" : "마이페이지";

  return (
    <DefaultLayout header={<Header>{headerText}</Header>}>
      <div css={mainContainer}>
        <div
          css={css`
            margin-top: 3%;
          `}
        >
          <Profile />
        </div>
        <div
          css={css`
            margin-top: 7%;
          `}
        >
          <TitleText>여름 쿨 뮤트</TitleText>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-top: 4%;
            height: 40%;
          `}
        >
          {colors.map((color) => (
            <ColorBox key={color} color={color} />
          ))}
        </div>

        <div
          css={css`
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 10%;
            @media (max-height: 800px) {
              margin-top: 4%;
            }
          `}
        >
          {moodTags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 17px;

            width: 100%;
            margin-top: auto;
            margin-bottom: 10%;
            /* 아이폰 SE */
            @media (max-height: 800px) {
              gap: 8px;
              margin-bottom: 5%;
            }
          `}
        >
          <Button variant="colored">퍼스널컬러 변경하기</Button>
          <button
            css={css`
              width: 100%;
              color: #8e9294;
              font-size: 12px;
              font-family: "Pretendard";

              text-decoration: underline;
              text-decoration-thickness: 1px;
              text-underline-position: under;
            `}
          >
            로그아웃
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

const mainContainer = css`
  width: 100%;
  height: 100%;
  padding: 0 5%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default MypageView;
