import { describe, expect, it } from "vitest";
import { snakeCase } from "./snake-case";

describe("String: SnakeCase", () => {
  it.for([
    { value: "", expected: "" },
    { value: "foo", expected: "foo" },
    { value: "Foo", expected: "foo" },
    { value: "Foo bar", expected: "foo_bar" },
    { value: "Foobar bar", expected: "foobar_bar" },
    { value: "--foo-bar--", expected: "foo_bar" },
    { value: "__FOO_BAR__", expected: "foo_bar" },
    { value: 0, expected: "" },
    { value: false, expected: "" },
    { value: true, expected: "" },
    { value: [], expected: "" },
    { value: {}, expected: "" },
    { value: null, expected: "" },
    { value: undefined, expected: "" },
  ])("snakeCase predicates for $value", ({ value, expected }) => {
    expect(snakeCase(value as unknown as string)).toBe(expected);
  });
});