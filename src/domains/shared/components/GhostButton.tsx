import { ButtonHTMLAttributes } from "react";
import { css } from "@emotion/react";

type GhostButton = ButtonHTMLAttributes<HTMLButtonElement> & {};

export default function GhostButton({ children, ...args }: GhostButton) {
  return (
    <button
      css={css`
        background: none;
        border: none;
      `}
      {...args}
    >
      {children}
    </button>
  );
}
