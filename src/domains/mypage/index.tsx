import { useState } from "react";
import { css } from "@emotion/react";
import Header from "../shared/components/Header";
import DefaultLayout from "../shared/components/layout/DefaultLayout";
import TitleText from "../shared/components/TitleText";
import Tag from "../shared/components/Tag";
import Button from "../shared/components/Button";
import Profile from "./components/Profile";
import ColorBox from "./components/ColorBox";
import { useIsShown } from "../shared/hooks/useIsShown";
import BottomSheet from "../shared/components/BottomSheet";

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
  const [isShown, onOpen, onClose] = useIsShown();

  const [isEdit, setIsEdit] = useState(false);

  const headerText = isEdit ? "마이페이지 변경" : "마이페이지";

  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
    setIsEdit(true);
    onClose();
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  return (
    <DefaultLayout header={<Header>{headerText}</Header>}>
      <div css={mainContainer}>
        <div css={profileContainer}>
          <Profile />
        </div>
        <div css={titleContainer}>
          <TitleText>여름 쿨 뮤트</TitleText>
        </div>
        <div css={colorBoxContainer}>
          {colors.map((color) => (
            <ColorBox key={color} color={color} />
          ))}
        </div>

        <div css={tagContainer}>
          {moodTags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {isEdit ? (
          <div
            css={css`
              ${buttonContainer}
              display: flex;
              flex-direction: row;
              gap: 15px;
              margin-bottom: 20%;
            `}
          >
            <Button onClick={handleCancel}>취소</Button>
            <Button variant="colored">확인</Button>
          </div>
        ) : (
          <div css={buttonContainer}>
            <Button variant="colored" onClick={onOpen}>
              퍼스널컬러 변경하기
            </Button>
            <button css={logoutButton}>로그아웃</button>
          </div>
        )}
      </div>
      {isShown && (
        <BottomSheet
          isOpen={isShown}
          close={onClose}
          handleClick={handleColorSelection}
        />
      )}
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

const profileContainer = css`
  margin-top: 3%;
`;

const titleContainer = css`
  margin-top: 7%;
`;

const colorBoxContainer = css`
  display: flex;
  justify-content: space-between;
  margin-top: 4%;
  height: 40%;
`;

const tagContainer = css`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10%;
  @media (max-height: 800px) {
    margin-top: 4%;
  }
`;

const buttonContainer = css`
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
`;

const logoutButton = css`
  width: 100%;
  color: #8e9294;
  font-size: 12px;
  font-family: "Pretendard";

  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-position: under;
`;

export default MypageView;
