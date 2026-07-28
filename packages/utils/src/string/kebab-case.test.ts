import { describe, expect, it } from "vitest";
import { kebabCase } from "./kebab-case";

describe("String: KebabCase", () => {
  it.for([
    { value: "", expected: "" },
    { value: "foo", expected: "foo" },
    { value: "Foo", expected: "foo" },
    { value: "Foo bar", expected: "foo-bar" },
    { value: "Foobar bar", expected: "foobar-bar" },
    { value: "--foo-bar--", expected: "foo-bar" },
    { value: "__FOO_BAR__", expected: "foo-bar" },
    { value: 0, expected: "" },
    { value: false, expected: "" },
    { value: true, expected: "" },
    { value: [], expected: "" },
    { value: {}, expected: "" },
    { value: null, expected: "" },
    { value: undefined, expected: "" },
  ])("kebabCase predicates for $value", ({ value, expected }) => {
    expect(kebabCase(value as unknown as string)).toBe(expected);
  });
});