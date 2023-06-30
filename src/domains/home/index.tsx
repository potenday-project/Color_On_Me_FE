import { css } from "@emotion/react";
import { useState } from "react";
import Image from "next/image";
import ColorModal from "./components/ColorModal";
import DefaultLayout from "../shared/components/layout/DefaultLayout";
import MainHeader from "../shared/components/MainHeader";
import TitleText from "../shared/components/TitleText";
import BottomSheet from "../shared/components/BottomSheet";
import { useIsShown } from "../shared/hooks/useIsShown";
import SpinWheel from "../shared/components/wheel/SpinWheel";
import { usePersonalColor } from "../shared/query/personal-color/color.queries";
import MainLogo from "../shared/components/MainLogo";
import SelectIcon from "public/icons/select.svg";

const HomePage = () => {
  const [isShown, onOpen, onClose] = useIsShown();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState<string>("red");

  const handleColorChange = (color: string) => {
    setCurrentColor(color);
  };

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

  // 사용자의 퍼스널 컬러 요청 후 그 컬러로 요청하기

  // const { data, isLoading } = usePersonalColor("SW_LG");

  return (
    <DefaultLayout header={<MainHeader />}>
      <div css={mainContainer}>
        <div css={containerStyle}>
          <div
            css={css`
              width: 100%;
              height: 100%;
              background: ${currentColor};
            `}
            onClick={openModal}
          />
          <div css={textContainer}>
            <div css={colorText}>Sky Blue</div>
            <div css={rgbText}>R : 117 G : 160 B : 200</div>
          </div>
        </div>

        <div css={personalColorContainer} onClick={onOpen}>
          <TitleText onClick={onOpen}>여름 쿨 뮤트</TitleText>
          <SelectIcon />
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
        <ColorModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          color={currentColor}
        />

        <div css={wheelContainer}>
          <div css={imageContainer}>
            <Image
              src="/images/polygon.png"
              width={25}
              height={15}
              alt="arrow"
            />
          </div>
          <div css={wheelRotation}>
            <SpinWheel handleColorChange={handleColorChange} />
          </div>
          <div css={logoContainer}>
            <MainLogo />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

const mainContainer = css`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

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
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
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

const imageContainer = css`
  position: absolute;
  top: -5%;
  left: 45%;
  transform: translate(-50%, -50%);
`;

const wheelContainer = css`
  position: absolute;
  bottom: -12%;
  right: -20%;
  width: 280px;
  height: 280px;

  @media (max-height: 568px) {
    /* 아이폰 SE */
    width: 280px;
    height: 280px;
    bottom: -12%;
    right: -20%;
  }

  @media (min-height: 569px) and (max-height: 667px) {
    /* 아이폰 6/7/8, Galaxy S6/S7 */
    width: 310px;
    height: 310px;
    bottom: -17%;
    right: -22%;
  }

  @media (max-width: 668px) and (max-height: 736px) {
    /* 아이폰 6/7/8 Plus, Galaxy S8/S9/S10 */
    width: 330px;
    height: 330px;
    bottom: -22%;
    right: -20%;
  }

  @media (min-height: 737px) and (max-height: 812px) {
    /* 아이폰 X/XS/11 Pro, Galaxy S20/S21 */
    width: 350px;
    height: 350px;
    bottom: -10%;
    right: -22%;
  }

  @media (min-height: 813px) and (max-height: 896px) {
    /* 아이폰 XR/11/11 Pro Max, Galaxy Note Series */
    width: 370px;
    height: 370px;
    bottom: -10%;
    right: -25%;
  }

  @media (min-height: 897px) {
    /* 아이폰 12 Mini and bigger, Galaxy Z Series */
    width: 390px;
    height: 390px;
    bottom: -10%;
    right: -18%;
  }
`;

const wheelRotation = css`
  width: 100%;
  height: 100%;
  transform: rotate(-20deg);
`;

const logoContainer = css`
  width: 120px;
  height: 120px;
  z-index: 2;
  position: absolute;
  top: 35%;
  left: 35%;

  @media (max-width: 668px) and (max-height: 736px) {
    /* 아이폰 6/7/8 Plus, Galaxy S8/S9/S10 */
    width: 100px;
    height: 100px;
    top: 30%;
    left: 35%;
  }
`;

export default HomePage;
