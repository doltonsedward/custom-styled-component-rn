export type fontSizeKeyType =
  | 'sm-4'
  | 'md-1'
  | 'md-2'
  | 'md-3'
  | 'md-4'
  | 'lg-1'
  | 'lg-2'
  | 'lg-3'
  | 'lg-4'
  | 'xl-1';

type fontSizeType = {
  [key in fontSizeKeyType]: number;
};

const fontSize: fontSizeType = {
  'sm-4': 10,
  'md-1': 12,
  'md-2': 14,
  'md-3': 16,
  'md-4': 18,
  'lg-1': 20,
  'lg-2': 22,
  'lg-3': 24,
  'lg-4': 28,
  'xl-1': 32
};

export default fontSize;
