import { describe, expect, it } from "vitest";
import { randomFloat } from "./float";

describe("Random: Float", () => {
  it.for([
    {
      min: 0,
      max: 100,
    },
    {
      min: -100,
      max: 100,
    },
    {
      min: 0,
      max: 0,
    },
    {
      min: -.5,
      max: 2.5,
    },
  ])("randomFloat predicates for ($min, $max)", ({ min, max }) => {
    expect(randomFloat(min, max)).toSatisfy((value) => value >= min && value <= max);
  });

  it.for([
    {
      min: 0,
      max: 100,
    },
    {
      min: -100,
      max: 100,
    },
  ])("randomFloat predicates for ($max, $min)", ({ min, max }) => {
    expect(randomFloat(max, min)).toSatisfy((value) => value >= min && value <= max);
  });

  it.for([
    {
      value1: undefined,
      value2: undefined,
    },
    {
      value1: null,
      value2: undefined,
    },
    {
      value1: 0,
      value2: undefined,
    },
    {
      value1: null,
      value2: null,
    },
    {
      value1: 0,
      value2: null,
    },
    {
      value1: NaN,
      value2: NaN,
    },
    {
      value1: 0,
      value2: NaN,
    },
    {
      value1: null,
      value2: NaN,
    },
  ])("randomFloat predicates for ($value1, $value2)", ({ value1, value2 }) => {
    expect(randomFloat(value1 as any, value2 as any)).toBeNaN();
    expect(randomFloat(value2 as any, value1 as any)).toBeNaN();
  });
});