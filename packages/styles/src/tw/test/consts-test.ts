import { Theme } from "@/types";
import { BORDER_PREFIX, DIVIDER_PREFIX, OUTLINE_PREFIX, UTILITY_PREFIX } from "../utils";

const color = {
  DEFAULT: ".white",
  on: ".gray.200",
  hover: ".gray.400",
  active: ".gray.400",
  container: ".gray.200",
  containerHover: ".gray.200",
  onContainer: ".brand.800",
};

const surfaceRole = {
  DEFAULT: "white",
  on: ".gray.800",

  hover: ".gray.200",
  active: ".gray.400",
  disabled: ".gray.50",
  onDisabled: ".gray.200",
};

export const VIR_THEME: Theme = {
  name: "vir",
  prefix: "vir",
  colors: {
    brand: ".teal.500",
    onBrand: ".teal.800",
  },
  semanticColors: {
    primary: color,
    secondary: color,
    tertiary: color,
    success: color,
    warning: color,
    danger: color,
    info: color,
  },
  border: {
    width: "1px",
    style: "solid",
    color: ".gray.200",
    radius: ".sm",
  },
  outline: {
    width: "1px",
    style: "solid",
    color: ".gray.200",
    offset: "2px",
  },
  divider: {
    width: "1px",
    style: "solid",
    color: ".gray.200",
  },

  surface: {
    surface: surfaceRole,
    surfaceVariant: surfaceRole,
    border: {
      width: "1px",
      style: "solid",
      color: ".gray.200",
      radius: ".sm",
    },
  },
  typography: {
    fontFamily: ["sans", "monospace"],
    fontSize: 16,
    fontWeight: ".semibold",
    lineHeight: 1.5,
    letterSpacing: "0",
  },
  zIndex: {
    base: 0,
    dropdown: 1010,
    sticky: 1020,
    overlay: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
    toast: 1070,
  },
  container: {
    center: true,
    paddingY: 16,
    paddingX: [
      ["DEFAULT", 8],
      ["[360px]", 12],
      [640, 16],
      ["lg", 16],
    ],
  },
};

export const EXPECTED = {
  colors: `--color-brand: var(--color-teal-500);
--color-on-brand: var(--color-teal-800);`,
  semanticColors: `--color-primary: var(--color-white);
--color-primary-on: var(--color-gray-200);
--color-primary-hover: var(--color-gray-400);
--color-primary-active: var(--color-gray-400);
--color-primary-container: var(--color-gray-200);
--color-primary-container-hover: var(--color-gray-200);
--color-primary-on-container: var(--color-brand-800);
--color-secondary: var(--color-white);
--color-secondary-on: var(--color-gray-200);
--color-secondary-hover: var(--color-gray-400);
--color-secondary-active: var(--color-gray-400);
--color-secondary-container: var(--color-gray-200);
--color-secondary-container-hover: var(--color-gray-200);
--color-secondary-on-container: var(--color-brand-800);
--color-tertiary: var(--color-white);
--color-tertiary-on: var(--color-gray-200);
--color-tertiary-hover: var(--color-gray-400);
--color-tertiary-active: var(--color-gray-400);
--color-tertiary-container: var(--color-gray-200);
--color-tertiary-container-hover: var(--color-gray-200);
--color-tertiary-on-container: var(--color-brand-800);
--color-success: var(--color-white);
--color-success-on: var(--color-gray-200);
--color-success-hover: var(--color-gray-400);
--color-success-active: var(--color-gray-400);
--color-success-container: var(--color-gray-200);
--color-success-container-hover: var(--color-gray-200);
--color-success-on-container: var(--color-brand-800);
--color-warning: var(--color-white);
--color-warning-on: var(--color-gray-200);
--color-warning-hover: var(--color-gray-400);
--color-warning-active: var(--color-gray-400);
--color-warning-container: var(--color-gray-200);
--color-warning-container-hover: var(--color-gray-200);
--color-warning-on-container: var(--color-brand-800);
--color-danger: var(--color-white);
--color-danger-on: var(--color-gray-200);
--color-danger-hover: var(--color-gray-400);
--color-danger-active: var(--color-gray-400);
--color-danger-container: var(--color-gray-200);
--color-danger-container-hover: var(--color-gray-200);
--color-danger-on-container: var(--color-brand-800);
--color-info: var(--color-white);
--color-info-on: var(--color-gray-200);
--color-info-hover: var(--color-gray-400);
--color-info-active: var(--color-gray-400);
--color-info-container: var(--color-gray-200);
--color-info-container-hover: var(--color-gray-200);
--color-info-on-container: var(--color-brand-800);`,
  border: `--${VIR_THEME.prefix}-${BORDER_PREFIX}-width: 1px;
--${VIR_THEME.prefix}-${BORDER_PREFIX}-style: solid;
--${VIR_THEME.prefix}-${BORDER_PREFIX}-color: var(--color-gray-200);
--${VIR_THEME.prefix}-${BORDER_PREFIX}-radius: var(--radius-sm);
--radius-${VIR_THEME.prefix}: var(--radius-sm);
`,
  outline: `--${VIR_THEME.prefix}-${OUTLINE_PREFIX}-width: 1px;
--${VIR_THEME.prefix}-${OUTLINE_PREFIX}-style: solid;
--${VIR_THEME.prefix}-${OUTLINE_PREFIX}-color: var(--color-gray-200);
--${VIR_THEME.prefix}-${OUTLINE_PREFIX}-offset: 2px;
`,
  divider: `--${VIR_THEME.prefix}-${DIVIDER_PREFIX}-width: 1px;
--${VIR_THEME.prefix}-${DIVIDER_PREFIX}-style: solid;
--${VIR_THEME.prefix}-${DIVIDER_PREFIX}-color: var(--color-gray-200);
`,
  surface: `--color-surface: white;
--color-surface-on: var(--color-gray-800);
--color-surface-hover: var(--color-gray-200);
--color-surface-active: var(--color-gray-400);
--color-surface-disabled: var(--color-gray-50);
--color-surface-on-disabled: var(--color-gray-200);
--color-surface-variant: white;
--color-surface-variant-on: var(--color-gray-800);
--color-surface-variant-hover: var(--color-gray-200);
--color-surface-variant-active: var(--color-gray-400);
--color-surface-variant-disabled: var(--color-gray-50);
--color-surface-variant-on-disabled: var(--color-gray-200);
--${VIR_THEME.prefix}-surface-border-width: 1px;
--${VIR_THEME.prefix}-surface-border-style: solid;
--${VIR_THEME.prefix}-surface-border-color: var(--color-gray-200);
--${VIR_THEME.prefix}-surface-border-radius: var(--radius-sm);
--radius-${VIR_THEME.prefix}-surface: var(--radius-sm);
--${VIR_THEME.prefix}-surface-outline-width: var(--${VIR_THEME.prefix}-outline-width);
--${VIR_THEME.prefix}-surface-outline-style: var(--${VIR_THEME.prefix}-outline-style);
--${VIR_THEME.prefix}-surface-outline-color: var(--${VIR_THEME.prefix}-outline-color);
--${VIR_THEME.prefix}-surface-outline-offset: var(--${VIR_THEME.prefix}-outline-offset);
--${VIR_THEME.prefix}-surface-divider-width: var(--${VIR_THEME.prefix}-divider-width);
--${VIR_THEME.prefix}-surface-divider-style: var(--${VIR_THEME.prefix}-divider-style);
--${VIR_THEME.prefix}-surface-divider-color: var(--${VIR_THEME.prefix}-divider-color);
`,
  typography: `--font-${VIR_THEME.prefix}: "sans", "monospace";
--text-${VIR_THEME.prefix}: 16px;
--font-weight-${VIR_THEME.prefix}: var(--font-weight-semibold);
--leading-${VIR_THEME.prefix}: 1.5;
--tracking-${VIR_THEME.prefix}: 0;
`,
  zIndex: `@utility z-base { z-index: 0; }
@utility z-dropdown { z-index: 1010; }
@utility z-sticky { z-index: 1020; }
@utility z-overlay { z-index: 1030; }
@utility z-modal { z-index: 1040; }
@utility z-popover { z-index: 1050; }
@utility z-tooltip { z-index: 1060; }
@utility z-toast { z-index: 1070; }
`,
  container: `${UTILITY_PREFIX} container { @apply mx-auto px-8 [360px]:px-12 [640px]:px-16 lg:px-16 py-16 }`,
};