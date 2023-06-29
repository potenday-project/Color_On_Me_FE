import { css } from "@emotion/react";

type ColorBoxProps = {
  color: string;
};

const ColorBox = ({ color }: ColorBoxProps) => {
  return (
    <div
      css={css`
        width: 12%;
        height: 100%;
        border-radius: 10px;
        background-color: ${color};
      `}
    />
  );
};

export default ColorBox;
