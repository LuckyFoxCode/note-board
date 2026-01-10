export function createSvgIcon(svgRaw: string, className?: string): SVGElement {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = svgRaw.trim();

  const svg = wrapper.firstElementChild as SVGElement;

  svg.classList.add('icon');
  if (className) svg.classList.add(className);

  return svg;
}
