import { renderHook } from '@testing-library/react'
import { useScreenDimensions } from "./useScreenDimensions";

describe("useScreenDimensions()", () => {
  it("returns correct dimensions", () => {
    Object.defineProperties(window, {
      innerWidth: {
        value: 1024,
      },
      innerHeight: {
        value: 768,
      },
    });

    const { result } = renderHook(() => useScreenDimensions());

    expect(result.current).toBeInstanceOf(Array);
    expect(result.current[0]).toBe(1024);
    expect(result.current[1]).toBe(768);
  });
});
