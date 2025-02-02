export const getDefaultFontSize = (): number => {
  const html = document.querySelector('html') as HTMLHtmlElement;

  return parseInt(getComputedStyle(html).getPropertyValue('font-size'), 10);
};
