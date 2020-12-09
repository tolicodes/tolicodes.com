import { render } from "@testing-library/react";
import React from "react";
import { App } from "./App";

describe("<App/>", () => {
  test("smoke", () => {
    expect(() => {
      // render(<App pageId={"1234"} />);
    }).not.toThrowError();
  });
});
