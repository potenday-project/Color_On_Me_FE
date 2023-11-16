import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import Toggle from "./Toggle";
import useColor from "../hooks/useColor";

const MainHeader = () => {
  const [colorRange, setColorRange] = useColor();

  const [isChecked, setIsChecked] = useState(colorRange === "worst");

  const toggleColor = (e: any) => {
    setIsChecked(e.target.checked);

    if (colorRange === "best") {
      localStorage.setItem("colorRange", "worst");
      setColorRange("worst");
    } else {
      localStorage.setItem("colorRange", "best");
      setColorRange("best");
    }
  };

  useEffect(() => {
    const color = localStorage.getItem("colorRange") || "best";
    setColorRange(color as any);
  }, []);

  return (
    <div css={headerContainer}>
      <Image src="/icons/subLogo.png" alt="logo" width={160} height={37} />
      <Toggle checked={isChecked} onChange={toggleColor} />
    </div>
  );
};

const headerContainer = css`
  height: 63px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default MainHeader;
