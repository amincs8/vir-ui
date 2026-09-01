export type ColorScale = Record<string | number, string>;
export type ColorValue = string | ColorScale;

export interface ColorRole {
  DEFAULT: string;
  on: string;

  hover?: string;
  active?: string;
  container?: string;
  containerHover?: string;
  onContainer?: string;
}

export interface SemanticColors {
  primary: ColorRole;
  secondary: ColorRole;
  tertiary: ColorRole;
  success: ColorRole;
  warning: ColorRole;
  danger: ColorRole;
  info: ColorRole;
}

export interface Border {
  width: string | number;
  color: string;
  style?: string;
  radius?: string | number;
}

export interface Divider {
  width: string | number;
  color: string;
  style?: string;
}

export interface Outline {
  width: string | number;
  color: string;
  style?: string;
  offset?: string | number;
}

export interface SurfaceRole {
  DEFAULT: string;
  on: string;

  hover?: string;
  active?: string;
  disabled?: string;
  onDisabled?: string;
}

export interface Surface {
  surface: SurfaceRole;
  surfaceVariant: SurfaceRole;

  border?: Border;
  outline?: Outline;
  divider?: Divider;
}

export interface Typography {
  fontFamily: string[];

  fontSize: string | number;
  fontWeight: string | number;
  lineHeight: string | number;
  letterSpacing?: string | number;
}

export interface ZIndex {
  base: number;
  dropdown: number;
  sticky: number;
  overlay: number;
  modal: number;
  popover: number;
  tooltip: number;
  toast: number;
}

export interface Theme {
  name: string;
  prefix: string;

  colors: Record<string, ColorValue>;
  semanticColors: SemanticColors;

  border: Border;
  divider: Divider;
  outline: Outline;
  surface: Surface;
  typography: Typography;
  zIndex: ZIndex;
}