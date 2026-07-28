import { describe, expect, it } from "vitest";
import { trim, trimStart, trimEnd } from "./trim";

describe("String: Trim", () => {
  it.for([
    {
      value: "",
      expectations: {
        trim: "",
        trimStart: "",
        trimEnd: "",
      },
    },
    {
      value: "  foo bar  ",
      expectations: {
        trim: "foo bar",
        trimStart: "foo bar  ",
        trimEnd: "  foo bar",
      },
    },
    {
      value: "-_-foo bar_-_",
      chars: "-_",
      expectations: {
        trim: "foo bar",
        trimStart: "foo bar_-_",
        trimEnd: "-_-foo bar",
      },
    },
    {
      value: " ..foo bar  ",
      chars: " .",
      expectations: {
        trim: "foo bar",
        trimStart: "foo bar  ",
        trimEnd: " ..foo bar",
      },
    },
    { value: 0, expected: "" },
    { value: false, expected: "" },
    { value: true, expected: "" },
    { value: [], expected: "" },
    { value: {}, expected: "" },
    { value: null, expected: "" },
    { value: undefined, expected: "" },
  ])("trim predicates for $value/$chars", ({ value, expected, expectations, chars }) => {
    expect(trim(value as unknown as string, chars)).toBe(expected ?? expectations.trim);
    expect(trimStart(value as unknown as string, chars)).toBe(expected ?? expectations.trimStart);
    expect(trimEnd(value as unknown as string, chars)).toBe(expected ?? expectations.trimEnd);
  });
});