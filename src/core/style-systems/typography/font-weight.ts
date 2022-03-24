export type fontWeightKeyType = 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';

type fontWeightType = {
  [key in fontWeightKeyType]: string;
};

const fontWeight: fontWeightType = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700'
};

export default fontWeight;
