import {
  forwardRef,
  ReactNode,
  useMemo,
  LegacyRef,
  HTMLAttributes,
} from "react";
import { css } from "@emotion/react";
import Navigation from "../Navigation";

type DefaultLayoutProps = HTMLAttributes<HTMLDivElement> & {
  isLogined?: boolean;
  header?: ReactNode;
  children: ReactNode | ReactNode[];
  centered?: boolean;
};

const DefaultLayout = (
  {
    isLogined,
    header,
    children,
    centered = false,
    ...args
  }: DefaultLayoutProps,
  ref: LegacyRef<HTMLDivElement>
) => {
  const layoutMainStyle = useMemo(() => {
    return css`
      height: 100%;
      ${centered &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    `;
  }, [isLogined, centered]);

  return (
    <div css={mainContainer} ref={ref} {...args}>
      {header && <header>{header}</header>}
      <main css={[layoutMainStyle]}>{children}</main>
      <Navigation />
    </div>
  );
};

const mainContainer = css`
  height: 100%;
`;

export default forwardRef(DefaultLayout);
