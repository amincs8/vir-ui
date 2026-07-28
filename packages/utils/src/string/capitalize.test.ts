import { describe, expect, it } from "vitest";
import { capitalize } from "./capitalize";

describe("String: Capitalize", () => {
  it.for([
    { value: "", expected: "" },
    { value: "foo", expected: "Foo" },
    { value: "Foo", expected: "Foo" },
    { value: "foo bar", expected: "Foo bar" },
    { value: "foo Bar", expected: "Foo bar" },
    { value: "foobar bar", expected: "Foobar bar" },
    { value: "--foo-bar--", expected: "--foo-bar--" },
    { value: "__FOO_BAR__", expected: "__foo_bar__" },
    { value: 0, expected: "" },
    { value: false, expected: "" },
    { value: true, expected: "" },
    { value: [], expected: "" },
    { value: {}, expected: "" },
    { value: null, expected: "" },
    { value: undefined, expected: "" },
  ])("capitalize predicates for $value", ({ value, expected }) => {
    expect(capitalize(value as unknown as string)).toBe(expected);
  });
});