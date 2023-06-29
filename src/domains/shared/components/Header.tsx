import { css } from "@emotion/react";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return <div css={headerContainer}>{children}</div>;
};

const headerContainer = css`
  height: 63px;
  padding: 12px 0 12px 5%;

  display: flex;
  align-items: center;

  color: #000;
  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 700;
  line-height: 18px;
`;

export default Header;
