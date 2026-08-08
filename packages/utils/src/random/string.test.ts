import { describe, expect, it } from "vitest";
import { randomString } from "./string";

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMERIC = "0123456789";

describe("Random: String", () => {
  it.for([
    {
      length: 10,
      mode: "lowercase",
      chars: LOWERCASE,
    },
    {
      length: 9,
      mode: "uppercase",
      chars: UPPERCASE,
    },
    {
      length: 12,
      mode: "alphabet",
      chars: `${LOWERCASE}${UPPERCASE}`,
    },
    {
      length: 100,
      mode: "numeric",
      chars: NUMERIC,
    },
    {
      length: 1,
      mode: "lowercase-numberic",
      chars: `${LOWERCASE}${NUMERIC}`,
    },
    {
      length: 0,
      mode: "uppercase-numberic",
      chars: `${UPPERCASE}${NUMERIC}`,
    },
    {
      length: 10,
      mode: "alphanumberic",
      chars: `${LOWERCASE}${UPPERCASE}${NUMERIC}`,
    },
  ])("random string with mode $mode", ({ length, mode, chars }) => {
    expect(randomString(length, mode)).toSatisfy((value) => {
      let result = false;

      if (typeof value === "string" && value.length === length) {
        result = true;
        for (const ch of value) {
          result = chars.indexOf(ch) !== -1;

          if (!result) break;
        }
      }

      return result;
    });
  });

  it.for([
    {
      length: 8,
      chars: LOWERCASE,
    },
    {
      length: 8,
      chars: LOWERCASE.slice(0, 10) + UPPERCASE.slice(10),
    },
    {
      length: 10,
      chars: "😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🤩🥳",
    },
  ])("random string with chars $chars", ({ length, chars }) => {
    expect(randomString(length, chars)).toSatisfy((value) => {
      let result = false;
      const valueArray = Array.from<string>(value);

      if (typeof value === "string" && valueArray.length === length) {
        const characters = Array.from(chars);
        result = true;
        for (const ch of valueArray) {
          result = characters.indexOf(ch) !== -1;

          if (!result) break;
        }
      }

      return result;
    });
  });
});