import { describe, expect, it } from "vitest";
import { cn } from "./cn";
import { ClassList } from "./classlists";

describe("Classlists: cn", () => {
  it.for([
    { value: ["foo"], expected: "foo" },
    { value: ["foo", "bar"], expected: "foo bar" },
    { value: ["foo", undefined], expected: "foo" },
    { value: ["foo", null], expected: "foo" },
    { value: ["foo", false], expected: "foo" },
    { value: ["foo", 0], expected: "foo" },
    { value: ["foo", 1], expected: "foo" },
    { value: ["foo", ""], expected: "foo" },
    { value: [["foo", "bar"]], expected: "foo bar" },
    { value: [["foo"], ["bar"]], expected: "foo bar" },
    { value: [{ foo: true }], expected: "foo" },
    { value: [{ foo: false }], expected: "" },
    { value: [{ foo: true, bar: true }], expected: "foo bar" },
    { value: [{ foo: true, bar: false }], expected: "foo" },
    { value: [{ foo: false, bar: true }], expected: "bar" },
    { value: ["foo", { bar: true }], expected: "foo bar" },
    { value: ["foo", ["bar", { baz: true }]], expected: "foo bar baz" },
    { value: ["px-2 text-lg"], expected: "px-2 text-lg" },
    { value: ["p-2", "px-4"], expected: "p-2 px-4" },
    { value: ["inline-flex", "items-center", "rounded-md"], expected: "inline-flex items-center rounded-md" },
    {
      value: [
        "inline-flex items-center rounded-md",
        "px-2 py-1",
        {
          "opacity-50": true,
          "cursor-not-allowed": false,
        },
      ],
      expected: "inline-flex items-center rounded-md px-2 py-1 opacity-50",
    },
  ])("cn predicates for $value", ({ value, expected }) => {
    expect(cn(...(value as unknown as ClassList[]))).toBe(expected);
  });
});