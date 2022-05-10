import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Spinner from "..";

describe("Spinner", () => {
  test("Thumb component renders correctly", () => {
    render(<Spinner />);

    const spinner = screen.getByTitle("Spinner");

    expect(spinner).toBeInTheDocument();
  });

  test("Spinner is visible", () => {
    render(<Spinner />);
    const spinner = screen.getByTitle("Spinner");
    expect(spinner).toBeVisible();
  });

  test("Spinner component snapshot", () => {
    const tree = renderer.create(<Spinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
