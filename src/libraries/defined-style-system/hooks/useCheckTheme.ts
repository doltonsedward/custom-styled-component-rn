import { useRef } from 'react';

const useCheckTheme = (theme: string) => {
  const currentTheme = useRef(theme);

  const hasThemeChanged = currentTheme.current !== theme;

  if (hasThemeChanged) currentTheme.current = theme;

  return hasThemeChanged;
};

export default useCheckTheme;
