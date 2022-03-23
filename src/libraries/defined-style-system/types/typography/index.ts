import FontSizeType from './font-size';
import FontWeightType from './font-weight';
import LetterSpacingType from './letter-spacing';
import LineHeightType from './line-height';

interface TypographyType {
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  lineHeight: LineHeightType;
  letterSpacing?: LetterSpacingType;
}

export default TypographyType;
