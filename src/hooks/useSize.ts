import { RefObject, useLayoutEffect, useState } from "react";

export function useSize(ref: RefObject<any>) {
  const [size, setSize] = useState({ height: 0, width: 0 });
  useLayoutEffect(() => {
    setSize({
      height: ref.current.getBoundingClientRect()?.height,
      width: ref.current.getBoundingClientRect()?.width,
    });
  }, []);

  return size;
}
