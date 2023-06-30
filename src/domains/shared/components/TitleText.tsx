import { ButtonHTMLAttributes, ReactNode, useMemo } from "react";
import { css } from "@emotion/react";

interface UnderlinedTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  underline?: boolean;
}

const TitleText = ({ children, underline, ...props }: UnderlinedTextProps) => {
  const textStyle = useMemo(() => {
    return css`
      font-size: 24px;
      font-family: "Pretendard";
      color: #000;
      border-bottom: ${underline ? "1px solid black" : "none"};
    `;
  }, [underline]);

  return (
    <button css={textStyle} {...props}>
      {children}
    </button>
  );
};

export default TitleText;
