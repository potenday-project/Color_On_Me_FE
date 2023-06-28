import { css } from "@emotion/react";
import Image from "next/image";

const MainHeader = () => {
  return (
    <div css={headerContainer}>
      <Image src="/icons/subLogo.png" alt="logo" width={160} height={37} />
    </div>
  );
};

const headerContainer = css`
  height: 63px;
  padding: 12px 0 12px 5%;
`;

export default MainHeader;
