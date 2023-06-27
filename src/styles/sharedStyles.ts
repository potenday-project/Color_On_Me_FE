import { css } from "@emotion/react";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export const centeredStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
