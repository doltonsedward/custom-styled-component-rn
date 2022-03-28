import { useContext, useRef } from 'react';
import createStyle from '../helpers/createStyle';
import { DefinedSystemContext } from '../contexts/DefinedSystem';

const StylesSheets = {};

const useDefinedStyles = (props, compId, definedStyles) => {
  const { theme, systems } = useContext(DefinedSystemContext);
  const currentTheme = useRef(theme);

  const hasThemeChanged = currentTheme.current === theme;

  if (hasThemeChanged) currentTheme.current = theme;

  const styleSheets = definedStyles?.map((definedStyle, index) => {
    // handle dynamic style with function
    if (typeof definedStyle === 'function') return createStyle(theme, systems, definedStyle(props));

    const isStyleAlrExist = StylesSheets[`${compId}_${index}`];
    if (!hasThemeChanged && isStyleAlrExist) return StylesSheets[`${compId}_${index}`];

    StylesSheets[`${compId}_${index}`] = createStyle(theme, systems, definedStyle);
    return StylesSheets[`${compId}_${index}`];
  });

  return styleSheets;
};

export default useDefinedStyles;
