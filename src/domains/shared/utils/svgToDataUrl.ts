import { ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export function svgToDataUrl(svgComponent: ReactElement): string {
  const svgString = renderToStaticMarkup(svgComponent);
  const encodedSVG = encodeURIComponent(svgString);
  return `url("data:image/svg+xml,${encodedSVG}")`;
}
