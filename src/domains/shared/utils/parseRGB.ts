export const parseRGB = (rgbString: string) => {
  const matches = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (matches) {
    const [, r, g, b] = matches;
    return `R : ${r} G : ${g} B : ${b}`;
  }
  return "";
};
