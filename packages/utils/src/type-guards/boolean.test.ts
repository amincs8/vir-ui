import { isBoolean, isFalse, isTrue } from "./boolean";
import { describe, expect, it } from "vitest";

describe("Type Guards: Boolean", () => {
  it.for([
    {
      value: false,
      expectations: {
        isBoolean: true,
        isTrue: false,
        isFalse: true,
      },
    },
    {
      value: true,
      expectations: {
        isBoolean: true,
        isTrue: true,
        isFalse: false,
      },
    },
    { value: "string", expected: false },
    { value: "", expected: false },
    { value: null, expected: false },
    { value: undefined, expected: false },
    { value: 100, expected: false },
    { value: [], expected: false },
    { value: [1, 2, 3], expected: false },
    { value: {}, expected: false },
    { value: { foo: true }, expected: false },
    { value: new Date(), expected: false },
    { value: new Set(), expected: false },
    { value: new Map(), expected: false },
    { value: () => 0, expected: false },
  ])("boolean predicates for $value", ({ value, expectations, expected }) => {
    expect(isBoolean(value)).toBe(expected ?? expectations.isBoolean);
    expect(isTrue(value)).toBe(expected ?? expectations.isTrue);
    expect(isFalse(value)).toBe(expected ?? expectations.isFalse);
  });
});

// import { doTest, TestArgI } from "../__tests__";

// const tests: TestArgI["tests"] = [
//   {
//     label: "true",
//     funcArg: [true],
//     expectValueObject: {
//       isBoolean: { label: "true", value: true },
//       isTrue: { label: "true", value: true },
//       isFalse: { label: "false", value: false },
//     },
//   },
//   {
//     label: "false",
//     funcArg: [false],
//     expectValueObject: {
//       isBoolean: { label: "true", value: true },
//       isTrue: { label: "false", value: false },
//       isFalse: { label: "true", value: true },
//     },
//   },

//   {
//     label: "null",
//     expectValue: false,
//     expectLabel: "false",
//     funcArg: [null],
//   },
//   {
//     label: "undefined",
//     expectValue: false,
//     expectLabel: "false",
//     funcArg: [undefined],
//   },
//   {
//     label: "object",
//     expectValue: false,
//     expectLabel: "false",
//     funcArg: [{}],
//   },
//   {
//     label: "string",
//     expectValue: false,
//     expectLabel: "false",
//     funcArg: ["string"],
//   },
//   {
//     label: "number",
//     expectValue: false,
//     expectLabel: "false",
//     funcArg: [42],
//   },
//   {
//     label: "function",
//     expectValue: false,
//     expectLabel: "false",
//     funcArg: [() => {}],
//   },
//   {
//     label: "empty array",
//     expectValue: false,
//     expectLabel: "false",
//     funcArg: [[]],
//   },
//   {
//     label: "non-empty array",
//     expectValue: false,
//     expectLabel: "false",
//     funcArg: [[1, 2]],
//   },
//   {
//     label: "Date",
//     expectValue: false,
//     expectLabel: "false",
//     funcArg: [new Date()],
//   },
//   {
//     label: "Map",
//     expectValue: false,
//     expectLabel: "false",
//     funcArg: [new Map()],
//   },
//   {
//     label: "Set",
//     expectValue: false,
//     expectLabel: "false",
//     funcArg: [new Set()],
//   },
// ];

// doTest({
//   name: "isBoolean",
//   func: isBoolean,
//   tests,
// });
// doTest({
//   name: "isTrue",
//   func: isTrue,
//   tests,
// });
// doTest({
//   name: "isFalse",
//   func: isFalse,
//   tests,
// });