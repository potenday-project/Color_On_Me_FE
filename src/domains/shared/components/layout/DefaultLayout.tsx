import {
  forwardRef,
  ReactNode,
  useMemo,
  LegacyRef,
  HTMLAttributes,
} from "react";
import { css } from "@emotion/react";
import Navigation from "../Navigation";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading";

type DefaultLayoutProps = HTMLAttributes<HTMLDivElement> & {
  isLogined?: boolean;
  header?: ReactNode;
  children: ReactNode | ReactNode[];
  centered?: boolean;
  requireAuth?: boolean;
};

const DefaultLayout = (
  {
    isLogined,
    header,
    children,
    centered = false,
    requireAuth = true,
    ...args
  }: DefaultLayoutProps,
  ref: LegacyRef<HTMLDivElement>
) => {
  const { isLoading, verified } = useAuth();

  const layoutMainStyle = useMemo(() => {
    return css`
      height: calc(100vh - 81px - 63px);
      ${centered &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    `;
  }, [isLogined, centered]);

  if (isLoading) {
    return <Loading />;
  }

  if (!verified) {
    return <></>;
  }

  return (
    <div css={mainContainer} ref={ref} {...args}>
      {header && <header>{header}</header>}
      <main css={[layoutMainStyle]}>{children}</main>
      <div css={navigationContainer}>
        <Navigation />
      </div>
    </div>
  );
};

const mainContainer = css`
  height: 100%;
  max-width: 520px;
  margin: 0 auto;
`;

const navigationContainer = css`
  position: relative;
  z-index: 1;
`;

export default forwardRef(DefaultLayout);
