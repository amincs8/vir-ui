import { afterEach, describe, expect, it } from "vitest";
import { generateTailwindTheme, generateTailwindThemeFile } from "./generate-tw-theme";
import { EXPECTED, VIR_THEME } from "./test/consts-test";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const expectedStyles =
  "@theme {\n" +
  [
    EXPECTED.colors.trim(),
    EXPECTED.semanticColors.trim(),
    EXPECTED.border.trim(),
    EXPECTED.divider.trim(),
    EXPECTED.outline.trim(),
    EXPECTED.surface.trim(),
    EXPECTED.typography.trim(),
  ].join("\n") +
  "\n}\n" +
  [EXPECTED.container.trim(), EXPECTED.zIndex.trim()].join("\n");

describe("generateTailwindTheme", () => {
  it("Should generates tailwind theme vars", () => {
    expect(generateTailwindTheme(VIR_THEME).trim()).toBe(expectedStyles);
  });
});

describe("generateTailwindThemeFile", () => {
  let tempDir: string;

  afterEach(async () => {
    if (tempDir) {
      await rm(tempDir, { recursive: true, force: true });
    }
  });

  it("generates a Tailwind theme CSS file", async () => {
    tempDir = await mkdtemp(join(tmpdir(), "tailwind-theme-"));

    const outputPath = join(tempDir, "theme.css");

    await generateTailwindThemeFile(VIR_THEME, outputPath);

    const css = await readFile(outputPath, "utf8");

    expect(css.trim()).toBe(expectedStyles);
  });
});