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
      text-decoration: ${underline ? "underline" : "none"};
      text-decoration-thickness: 1px;
      text-underline-position: under;
    `;
  }, [underline]);

  return (
    <button css={textStyle} {...props}>
      {children}
    </button>
  );
};

export default TitleText;
