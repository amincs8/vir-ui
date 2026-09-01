import { describe, expect, it } from "vitest";
import { generateThemeValue } from "./tw";
import { VarType } from "./utils";

describe("Private Utils: Tailwind/generateThemeValue", () => {
  it.for([
    { type: "color", value: "blue", expected: "blue" },
    { type: "color", value: "--color-blue-500", expected: "var(--color-blue-500)" },
    { type: "color", value: ".blue.500", expected: "var(--color-blue-500)" },
    { type: "color", value: "..blue.500", prefix: "base", expected: "var(--base-blue-500)" },
    { type: "color", value: "..blue\\.500", prefix: "base", expected: "var(--base-blue.500)" },
    { type: "color", value: ".blue\\.500", prefix: "base", expected: "var(--color-blue.500)" },
    { type: "color", value: "...blue.500", prefix: "base", expected: "var(--blue-500)" },
    {
      type: "color",
      value: [".blue.500", "blue"],
      prefix: "base",
      expected: "var(--color-blue-500, blue)",
    },
    {
      type: "color",
      value: [".blue.500", ".blue.600"],
      prefix: "base",
      expected: "var(--color-blue-500, var(--color-blue-600))",
    },
    {
      type: "color",
      value: [".blue.500", "blue", ".blue.600"],
      prefix: "base",
      expected: "var(--color-blue-500, blue)",
    },
    {
      type: "color",
      value: [".blue.500", ".blue.600", "blue"],
      prefix: "base",
      expected: "var(--color-blue-500, var(--color-blue-600, blue))",
    },
    {
      type: "spacing",
      value: 16,
      expected: "16px",
    },
    {
      type: "spacing",
      value: "16px",
      expected: "16px",
    },
    {
      type: "spacing",
      value: ".xl",
      expected: "var(--spacing-xl)",
    },
    {
      type: "font-size",
      value: 16,
      expected: "16px",
    },
    {
      type: "font-size",
      value: "16px",
      expected: "16px",
    },
    {
      type: "font-size",
      value: ".xl",
      expected: "var(--text-xl)",
    },
    {
      type: "font-family",
      value: "sans",
      expected: "sans",
    },
    {
      type: "font-family",
      value: ".sans",
      expected: "var(--font-sans)",
    },
    {
      type: "container",
      value: ".value",
      expected: "var(--container-value)",
    },
    {
      type: "container",
      value: ".value",
      expected: "var(--container-value)",
    },
    {
      type: "font-weight",
      value: ".value",
      expected: "var(--font-weight-value)",
    },
    {
      type: "line-height",
      value: ".value",
      expected: "var(--leading-value)",
    },
    {
      type: "letter-spacing",
      value: ".value",
      expected: "var(--tracking-value)",
    },
    {
      type: "border-radius",
      value: ".value",
      expected: "var(--radius-value)",
    },
  ])("should convert $type/$value to $expected", ({ type, value, prefix, expected }) => {
    expect(generateThemeValue({ type: type as VarType, value, themePrefix: prefix ?? "" })).toBe(
      expected,
    );
  });
});