import { describe, expect, it } from "vitest";
import { reverse } from "./reverse";

describe("String: Reverse", () => {
  it.for([
    { value: "", expected: "" },
    { value: "foo", expected: "oof" },
    { value: "Foo", expected: "ooF" },
    { value: "Foo bar", expected: "rab ooF" },
    { value: "Foobar bar", expected: "rab rabooF" },
    { value: "--foo-bar--", expected: "--rab-oof--" },
    { value: "__FOO_BAR__", expected: "__RAB_OOF__" },
    { value: 0, expected: "" },
    { value: false, expected: "" },
    { value: true, expected: "" },
    { value: [], expected: "" },
    { value: {}, expected: "" },
    { value: null, expected: "" },
    { value: undefined, expected: "" },
  ])("Reverse predicates for $value", ({ value, expected }) => {
    expect(reverse(value as unknown as string)).toBe(expected);
  });
});