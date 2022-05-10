import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Thumb from "..";

describe("Thumb", () => {
  test("Thumb component renders correctly", () => {
    render(<Thumb image="image" />);
    const image = screen.getByRole("img", { name: "movie-thumb" });

    expect(image).toHaveAttribute("src", "image");

    expect(image).toBeInTheDocument();

    expect(image).toHaveAttribute("alt", "movie-thumb");
  });

  test("Thumb component snapshot", () => {
    const tree = renderer.create(<Thumb image="" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
