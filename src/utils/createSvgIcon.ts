export function createSvgIcon(
  svgRaw: string,
  className?: string,
): SVGSVGElement {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgRaw, 'image/svg+xml');

  const svg = doc.querySelector('svg');

  if (!svg) {
    throw new Error('SVG icon parsing failed');
  }

  svg.classList.add('icon');
  if (className) svg.classList.add(className);

  return svg;
}
