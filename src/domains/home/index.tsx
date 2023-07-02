import { css } from "@emotion/react";
import { useEffect, useState } from "react";
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
import { useGetUser } from "../shared/query/user/user.queries";
import { PERSONAL_COLOR_MAPPING } from "../shared/constants/constants";
import { parseRGB } from "../shared/utils/parseRGB";

const HomePage = () => {
  const { data: userData, isLoading: userDataLoading } = useGetUser();

  const [isShown, onOpen, onClose] = useIsShown();

  const [modalIsOpen, setIsOpen] = useState(false);

  const [currentColor, setCurrentColor] = useState({
    code: "",
    name: "",
  });
  const [currentWheelColor, setCurrentWheelColor] = useState("");
  const [currentWheelColorInfo, setCurrentWheelColorInfo] = useState({
    name: "",
    rgb: "",
  });
  const [wheelPropsColors, setWheelPropsColors] = useState(undefined);

  const { data: colorData, isLoading: colorDataLoading } = usePersonalColor(
    currentColor.code
  );

  function openModal() {
    if (!isShown) {
      setIsOpen(true);
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  // 휠 컬러 변경에 따른 컬러 정보 변경
  const handleColorChange = (rgbColor: string) => {
    setCurrentWheelColor(rgbColor);
    const colorInfo = colorData?.colors?.find(
      (color: any) => `rgb(${color.r}, ${color.g}, ${color.b})` === rgbColor
    );

    if (colorInfo) {
      setCurrentWheelColorInfo({
        name: colorInfo.name,
        rgb: rgbColor,
      });
    }
  };

  // 퍼스널 컬러 변경
  const handleColorSelection = (colorCode: string, colorName: string) => {
    setCurrentColor({
      name: colorName,
      code: colorCode,
    });
    onClose();
  };

  // 유저의 퍼스널 컬러 초기 세팅
  useEffect(() => {
    if (!userData) return;
    setCurrentColor({
      code: PERSONAL_COLOR_MAPPING[userData.personalColor],
      name: userData.personalColor,
    });
  }, [userData]);

  // 퍼스널 컬러에 따른 색상 초기 세팅
  useEffect(() => {
    if (!colorData) return;
    const colors = colorData?.colors?.map(
      (color: any) => `rgb(${color.r}, ${color.g}, ${color.b})`
    );
    setWheelPropsColors(colors);
    setCurrentWheelColor(colors[0]);
    setCurrentWheelColorInfo({
      name: colorData.colors[0].name,
      rgb: colors[0],
    });
  }, [colorData]);

  // if (userDataLoading || colorDataLoading) {
  //   return (
  //     <div
  //       css={css`
  //         display: flex;
  //         align-items: center;
  //         justify-content: center;
  //         width: 100%;
  //         height: 100%;
  //       `}
  //     >
  //       loading...
  //     </div>
  //   );
  // }

  return (
    <DefaultLayout header={<MainHeader />}>
      <div css={mainContainer}>
        <div css={containerStyle}>
          <div
            css={css`
              width: 100%;
              height: 100%;
              background: ${currentWheelColor};
            `}
            onClick={openModal}
          />

          <div css={textContainer}>
            <div css={colorText}>{currentWheelColorInfo.name}</div>
            <div css={rgbText}>{parseRGB(currentWheelColorInfo.rgb)}</div>
          </div>
        </div>

        <div css={personalColorContainer} onClick={onOpen}>
          <TitleText onClick={onOpen}>{currentColor.name}</TitleText>
          <SelectIcon />
        </div>
        <div css={moodTagContainer}>
          {colorData?.moods?.map((mood: any) => (
            <div key={mood.name} css={moodTag}>
              {mood.name}
            </div>
          ))}
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
          color={currentWheelColor}
          currentColor={currentWheelColorInfo}
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
            {wheelPropsColors && (
              <SpinWheel
                colors={wheelPropsColors}
                handleColorChange={handleColorChange}
              />
            )}
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
