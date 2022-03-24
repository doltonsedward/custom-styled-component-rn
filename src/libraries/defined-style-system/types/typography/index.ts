import fontSizeType from './font-size';
import fontWeightType from './font-weight';
import letterSpacingType from './letter-spacing';
import lineHeightType from './line-height';

interface TypographyType {
  fontSize?: fontSizeType;
  fontWeight?: fontWeightType;
  lineHeight: lineHeightType;
  letterSpacing?: letterSpacingType;
}

export default TypographyType;
