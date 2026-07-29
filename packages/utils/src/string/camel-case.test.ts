import { describe, expect, it } from "vitest";
import { camelCase } from "./camel-case";

describe("String: CamelCase", () => {
  it.for([
    { value: "", expected: "" },
    { value: "foo", expected: "foo" },
    { value: "Foo", expected: "foo" },
    { value: "Foo bar", expected: "fooBar" },
    { value: "Foobar bar", expected: "foobarBar" },
    { value: "--foo-bar--", expected: "fooBar" },
    { value: "__FOO_BAR__", expected: "fooBar" },
    { value: "foo 2 bar", expected: "foo2Bar" },
    { value: 0, expected: "" },
    { value: false, expected: "" },
    { value: true, expected: "" },
    { value: [], expected: "" },
    { value: {}, expected: "" },
    { value: null, expected: "" },
    { value: undefined, expected: "" },
  ])("camelCase predicates for $value", ({ value, expected }) => {
    expect(camelCase(value as unknown as string)).toBe(expected);
  });
});