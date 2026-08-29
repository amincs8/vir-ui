import { describe, expect, it } from "vitest";
import { generateZIndex } from "./z-index";

describe("Tailwind Generators: zIndex", () => {
  it("should generate z-index utilities", () => {
    const zIndex = {
      base: 0,
      dropdown: 1010,
      sticky: 1020,
      overlay: 1030,
      modal: 1040,
      popover: 1050,
      tooltip: 1060,
      toast: 1070,
    };
    const result = generateZIndex(zIndex);
    expect(result).toBe(
      `@utility z-base { z-index: 0; }
@utility z-dropdown { z-index: 1010; }
@utility z-sticky { z-index: 1020; }
@utility z-overlay { z-index: 1030; }
@utility z-modal { z-index: 1040; }
@utility z-popover { z-index: 1050; }
@utility z-tooltip { z-index: 1060; }
@utility z-toast { z-index: 1070; }
`,
    );
  });
});