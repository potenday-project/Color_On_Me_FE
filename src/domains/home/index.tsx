import { css } from "@emotion/react";
import { useState } from "react";
import ColorModal from "./components/ColorModal";
import DefaultLayout from "../shared/components/layout/DefaultLayout";
import MainHeader from "../shared/components/MainHeader";
import TitleText from "../shared/components/TitleText";
import BottomSheet from "../shared/components/BottomSheet";
import { useIsShown } from "../shared/hooks/useIsShown";

const HomePage = () => {
  const [isShown, onOpen, onClose] = useIsShown();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    if (!isShown) {
      setIsOpen(true);
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
    close();
  };

  return (
    <DefaultLayout header={<MainHeader />}>
      <div css={containerStyle}>
        <div css={colorContainer} onClick={openModal} />
        <div css={textContainer}>
          <div css={colorText}>Sky Blue</div>
          <div css={rgbText}>R : 117 G : 160 B : 200</div>
        </div>
      </div>

      <div css={personalColorContainer}>
        <TitleText underline onClick={onOpen}>
          여름 쿨 뮤트
        </TitleText>
      </div>
      <div css={moodTagContainer}>
        <div css={moodTag}>#차분한</div>
        <div css={moodTag}>#지적인</div>
        <div css={moodTag}>#잔잔한</div>
      </div>
      {isShown && (
        <BottomSheet
          isOpen={isShown}
          close={onClose}
          handleClick={handleColorSelection}
        />
      )}
      <ColorModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </DefaultLayout>
  );
};

const containerStyle = css`
  position: relative;
  height: 50%;
`;

const colorContainer = css`
  width: 100%;
  height: 100%;
  background: #75a0c8;
`;

const textContainer = css`
  position: absolute;
  top: 4.5%;
  left: 5%;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const colorText = css`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #000;
  font-size: 16px;
  font-family: "Pretendard";

  width: fit-content;
  padding: 0 14px;

  height: 36px;
  border-radius: 30px;
  background: #f4f4f4;
`;

const rgbText = css`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #8e9294;
  text-align: center;
  font-size: 12px;
  font-family: "Pretendard";

  width: fit-content;
  padding: 0 15px;

  height: 28px;

  border-radius: 30px;
  background: #f4f4f4;
`;

const personalColorContainer = css`
  margin-top: 22px;
  margin-left: 5%;
`;

const moodTagContainer = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 22px;
  margin-left: 5%;
`;

const moodTag = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 32px;

  border-radius: 30px;
  background: #f4f4f4;

  color: #000;
  font-size: 14px;
  font-family: "Pretendard";
`;

export default HomePage;
