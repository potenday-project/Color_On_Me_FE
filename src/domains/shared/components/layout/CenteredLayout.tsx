import { forwardRef, ReactNode, LegacyRef, HTMLAttributes } from "react";
import { css } from "@emotion/react";

type DefaultLayoutProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode | ReactNode[];
};

const CenteredLayout = (
  { children, ...args }: DefaultLayoutProps,
  ref: LegacyRef<HTMLDivElement>
) => {
  return (
    <div css={mainContainer} ref={ref} {...args}>
      <main>{children}</main>
    </div>
  );
};

const mainContainer = css`
  width: 100%;
  min-height: 100vh;
  max-height: fit-content;
  max-width: 520px;
  margin: 0 auto;
`;

export default forwardRef(CenteredLayout);
