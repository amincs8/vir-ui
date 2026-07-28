import { describe, expect, it } from "vitest";
import { escapeRegExp } from "./escape";

describe("String: escapeRegExp", () => {
  it.for([
    [".", "\\."],
    ["*", "\\*"],
    ["+", "\\+"],
    ["?", "\\?"],
    ["^", "\\^"],
    ["$", "\\$"],
    ["(", "\\("],
    [")", "\\)"],
    ["[", "\\["],
    ["]", "\\]"],
    ["{", "\\{"],
    ["}", "\\}"],
    ["|", "\\|"],
    ["\\", "\\\\"],
    ["hello", "hello"],
    ["hello world", "hello world"],
    ["123", "123"],
    ["😀", "😀"],
    [".*+?^${}()|[]\\", "\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\"],
  ])("escapes predicates $0", ([input, expected]) => {
    expect(escapeRegExp(input as unknown as any)).toBe(expected);
  });
});