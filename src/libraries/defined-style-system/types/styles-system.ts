import layoutType from './layout';
import spacingType from './spacing';

export interface borderRadiusType {
  [key: string]: number;
}

export interface shadowStyleType {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export interface shadowType {
  [key: string]: shadowStyleType;
}

export interface systemsType extends spacingType, layoutType {
  borderRadius?: borderRadiusType;
  shadow?: shadowType;
  bg?: string;
  [key: string]: any;
}
