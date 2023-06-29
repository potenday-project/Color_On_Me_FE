import { css } from "@emotion/react";

type TagProps = {
  children: string;
};

const Tag = ({ children }: TagProps) => {
  return <div css={tagStyle}>{children}</div>;
};

const tagStyle = css`
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

export default Tag;
