type layoutKey = 'width' | 'w' | 'height' | 'h';

type layoutType = {
  [key in layoutKey]: string | number;
};

export default layoutType;
