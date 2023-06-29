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
        <Profile />
        <div
          css={css`
            /* margin-top: 40px; */
            margin-top: 11%;
          `}
        >
          <TitleText>여름 쿨 뮤트</TitleText>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-top: 4%;
            /* margin-top: 14px; */
            height: 35%;
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
          `}
        >
          {moodTags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div
          css={css`
            display: flex;
            /* height: 100%; */
            /* flex-direction: column-reverse; */
            align-items: flex-end;
            flex-direction: column;
            gap: 17px;
            margin-top: 10%;
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
  padding: 0 5%;
  width: 100%;
  height: 100%;
`;

export default MypageView;
