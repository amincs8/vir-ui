import { describe, expect, it } from "vitest";
import { splitWords, splitWordsPrepare } from "./split-words";

describe("String: SplitWords", () => {
  it.for([
    { value: "", expectations: { splitWords: [], splitWordsPrepare: "" }},
    { value: "foo", expectations: { splitWords: ["foo"], splitWordsPrepare: "foo" }},
    { value: "Foo", expectations: { splitWords: ["Foo"], splitWordsPrepare: "Foo" }},
    { value: "Foo bar", expectations: { splitWords: ["Foo", "bar"], splitWordsPrepare: "Foo bar" }},
    { value: "Foobar bar", expectations: { splitWords: ["Foobar", "bar"], splitWordsPrepare: "Foobar bar" }},
    { value: "--foo-bar--", expectations: { splitWords: ["foo", "bar"], splitWordsPrepare: "foo bar" }},
    { value: "__FOO_BAR__", expectations: { splitWords: ["FOO", "BAR"], splitWordsPrepare: "FOO BAR" }},
    { value: 0, expectations: { splitWords: [], splitWordsPrepare: "" }},
    { value: false, expectations: { splitWords: [], splitWordsPrepare: "" }},
    { value: true, expectations: { splitWords: [], splitWordsPrepare: "" }},
    { value: [], expectations: { splitWords: [], splitWordsPrepare: "" }},
    { value: {}, expectations: { splitWords: [], splitWordsPrepare: "" }},
    { value: null, expectations: { splitWords: [], splitWordsPrepare: "" }},
    { value: undefined, expectations: { splitWords: [], splitWordsPrepare: "" }},
  ])("splitWords predicates for $value", ({ value, expectations }) => {
    expect(splitWordsPrepare(value as unknown as string)).toEqual(expectations.splitWordsPrepare);
    expect(splitWords(value as unknown as string)).toEqual(expectations.splitWords);
  });
});