import { Theme } from "@/types";
import {
  generateBorder,
  generateColors,
  generateDivider,
  generateOutline,
  generateSurface,
  generateTypography,
  generateZIndex,
  generateContainer,
} from "./generator";

const VAR_GENERATORS: Record<string, (...config: any[]) => string> = {
  colors: generateColors,
  semanticColors: generateColors,
  border: generateBorder,
  divider: generateDivider,
  outline: generateOutline,
  surface: generateSurface,
  typography: generateTypography,
};

const UTILITY_GENERATORS: Record<string, (...config: any[]) => string> = {
  container: generateContainer,
  zIndex: generateZIndex,
};

export function generateTailwindTheme (theme: Theme): string {
  let themeSection = "";
  let utilitySection = "";

  for (const key in VAR_GENERATORS) {
    themeSection += VAR_GENERATORS[key as keyof typeof VAR_GENERATORS]!(
      theme[key as keyof typeof theme]!,
      theme.prefix,
    );
  }

  for (const key in UTILITY_GENERATORS) {
    utilitySection += UTILITY_GENERATORS[key as keyof typeof UTILITY_GENERATORS]!(
      theme[key as keyof typeof theme]!,
      theme.prefix,
    ) + "\n";
  }

  return `@theme {\n${themeSection}}\n${utilitySection}`;
}