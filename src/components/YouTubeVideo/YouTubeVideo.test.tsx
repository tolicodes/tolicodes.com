import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { YouTubeVideo } from "./YouTubeVideo";

describe("<YouTubeVideo>", () => {
  test("smoke", () => {
    return expect(() => {
      render(<YouTubeVideo width={100} height={50} title={"Watch My Story"} />);
    }).not.toThrowError();
  });

  it("should render right title", () => {
    const { getByText } = render(
      <YouTubeVideo width={100} height={50} title={"Watch My Story"} />
    );
    expect(getByText("Watch My Story")).toBeVisible();
  });
});
