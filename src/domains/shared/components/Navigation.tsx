import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { centeredStyle } from "@/styles/sharedStyles";
import HomeIcon from "public/icons/home.svg";
import LogoIcon from "public/icons/navLogo.svg";
import PersonIcon from "public/icons/person.svg";
import useRouting from "../hooks/useRouting";
import IconWithText from "./IconWithText";
import GhostButton from "./GhostButton";

const Navigation = () => {
  const moveTo = useRouting("push");
  const router = useRouter();

  return (
    <footer css={footerContainer}>
      <nav css={[centeredStyle, navContainer]}>
        <GhostButton onClick={() => router.push("/")}>
          <IconWithText
            color={router.pathname === "/" ? "#000000" : "#B9BEC1"}
            icon={
              <HomeIcon
                fill={router.pathname === "/" ? "#000000" : "#B9BEC1"}
              />
            }
            bottomText="홈"
          />
        </GhostButton>
        <IconWithText icon={<LogoIcon />} bottomText="" />
        <GhostButton onClick={() => router.push("/mypage")}>
          <IconWithText
            color={router.pathname === "/mypage" ? "#000000" : "#B9BEC1"}
            icon={
              <PersonIcon
                fill={router.pathname === "/mypage" ? "#000000" : "#B9BEC1"}
              />
            }
            bottomText="마이페이지"
          />
        </GhostButton>
      </nav>
    </footer>
  );
};

const footerContainer = css`
  width: 100%;
  height: 81px;
  border-radius: 15px 15px 0px 0px;
  background: #fafafa;
  box-shadow: 0px -2px 3px 0px rgba(183, 183, 183, 0.25);
`;

const navContainer = css`
  height: 100%;
  justify-content: space-around;
`;

export default Navigation;
