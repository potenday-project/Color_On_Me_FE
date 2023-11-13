import { ButtonHTMLAttributes, useState } from "react";
import { css } from "@emotion/css";
import Sheet from "react-modal-sheet";
import { PERSONAL_COLOR_MAPPING } from "../constants/constants";
import { mobileStyle } from "@/styles/sharedStyles";

interface BottomSheetProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  close: () => void;
  handleClick: (color: string, colorName: string) => void;
}

const BottomSheet = ({ isOpen, close, handleClick }: BottomSheetProps) => {
  // const [selectedColor, setSelectedColor] = useState<string>("");

  // const handleColorSelection = (color: string) => {
  //   onClick();
  //   setSelectedColor(color);
  //   close();
  // };

  return (
    <Sheet snapPoints={[500]} isOpen={isOpen} onClose={close} css={sheetStyle}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content css={contentStyle}>
          <Sheet.Scroller>
            {Object.entries(PERSONAL_COLOR_MAPPING).map(
              ([colorName, colorCode], index) => (
                <button
                  key={colorName}
                  css={colorButton}
                  onClick={() => handleClick(colorCode, colorName, index)}
                >
                  {colorName}
                </button>
              )
            )}
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={close} />
    </Sheet>
  );
};

const sheetStyle = css`
  background: rgba(84, 84, 84, 0.8);
  backdrop-filter: blur(2px);
  ${mobileStyle}
`;

const contentStyle = css`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  /* overflow: auto; */
`;

const colorButton = css`
  width: 100%;
  padding: 17px 0;

  color: #000;
  text-align: center;
  font-size: 16px;
  font-family: Pretendard;

  gap: 10px;
`;

export default BottomSheet;
