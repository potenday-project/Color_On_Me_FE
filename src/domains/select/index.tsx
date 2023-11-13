import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { PERSONAL_COLOR } from "../shared/constants/constants";
import { useIsShown } from "../shared/hooks/useIsShown";
import CenteredLayout from "../shared/components/layout/CenteredLayout";
import { usePatchPersonalColor } from "../shared/query/user/user.queries";

const SelectPage = () => {
  const router = useRouter();

  const [isShown, onOpen, onClose] = useIsShown();
  const [selectedColor, setSelectedColor] = useState<null | number>(null);

  const { mutate: selectColor } = usePatchPersonalColor();

  const handleColorSelection = (colorId: number) => {
    setSelectedColor(colorId);
  };

  const handleClickStartButton = () => {
    if (!selectedColor) {
      onOpen();
      return;
    }
    selectColor(selectedColor, {
      onSuccess: () => {
        router.push("/");
      },
    });
  };

  useEffect(() => {
    if (isShown) {
      const modalCloseTimer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(modalCloseTimer);
    }
  }, [isShown]);

  return (
    <CenteredLayout>
      <div css={mainContainer}>
        <div css={mainText}>
          <span css={fontWeight}>퍼스널컬러</span>
          를
          <br />
          선택해주세요 ✍
        </div>

        <div css={subText}>
          나의 퍼스널컬러를 모른다면? <br />
          색상과 분위기가 궁금한 퍼스널컬러를 선택하세요 :-)
        </div>

        <div css={buttonContainer}>
          <div css={gridStyle}>
            {Object.entries(PERSONAL_COLOR).map(([season, colors]) => (
              <div key={season} css={columnStyle}>
                {colors?.map(({ id, name, color, fontColor }) => (
                  <button
                    key={name}
                    css={css`
                      ${colorButton};
                      background: ${selectedColor === id ? color : "#f4f4f4"};
                      color: ${selectedColor === id ? fontColor : "#000"};
                    `}
                    onClick={() => handleColorSelection(id)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            ))}
          </div>

          {isShown && <div css={alertModal}>퍼스널 컬러를 선택해주세요</div>}
        </div>
        <button css={startButtonStyle} onClick={handleClickStartButton}>
          컬러온미 시작하기
        </button>
      </div>
    </CenteredLayout>
  );
};

const mainContainer = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
`;

const mainText = css`
  font-size: 30px;
  font-family: "Pretendard";
`;

const fontWeight = css`
  font-weight: 700;
`;

const subText = css`
  color: #99a0a4;
  font-size: 12px;
  font-family: "Pretendard";
  line-height: 18px;
  margin-top: 17px;
  margin-bottom: 38px;
`;

const buttonContainer = css`
  position: relative;
`;

const gridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 42px;
`;

const columnStyle = css`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const colorButton = css`
  width: 100%;
  height: 36px;
  border-radius: 30px;
  background: #f4f4f4;
  font-size: 14px;
  font-family: "Pretendard";
  border: none;
  color: #000;
`;

const startButtonStyle = css`
  width: 100%;
  margin-top: 45px;
  height: 50px;
  border-radius: 30px;
  background: linear-gradient(
    131deg,
    #c4a1d8 0%,
    #a3abd2 21.62%,
    #89b3cd 45.74%,
    #fff3ab 93.73%
  );
  border: none;
  color: #fff;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 700;
  cursor: pointer;
`;

const alertModal = css`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);

  background-color: #242424a6;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 34px;

  border-radius: 10px;

  color: #fff;
  text-align: center;
  font-size: 12px;
  font-family: "pretendard";
`;

export default SelectPage;
