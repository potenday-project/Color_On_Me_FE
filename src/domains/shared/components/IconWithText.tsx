import { ReactElement, useMemo } from "react";
import { css } from "@emotion/react";
import { Color } from "@/styles/sharedStyles";

type IconWithTextProps = {
  bottomText: string;
  icon: ReactElement;
  color?: Color;
};

const IconWithText = ({
  bottomText,
  icon,
  color = "#000000",
}: IconWithTextProps) => {
  const IconText = useMemo(
    () => css`
      font-size: 10px;
      color: ${color};
      font-family: "Pretendard";
    `,
    [color]
  );

  return (
    <div css={IconContainer} aria-labelledby={bottomText}>
      <div>{icon}</div>
      {bottomText && <div css={IconText}>{bottomText}</div>}
    </div>
  );
};

const IconContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default IconWithText;
