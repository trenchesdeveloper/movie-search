import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { BrowserRouter } from "react-router-dom";
import Grid from "../../../components/Grid";

const MockedHome = () => {
  return (
    <BrowserRouter>
      <Grid header="header"></Grid>
    </BrowserRouter>
  );
};

describe("Home", () => {
  test("makes api call with proper string", async () => {
    render(<MockedHome />);

    const inputElement = screen.getByPlaceholderText(
      /Search Movie/i
    ) as HTMLInputElement;

    fireEvent.change(inputElement, {
      target: {
        value: "spider",
      },
    });

    //get the input element value
    const inputValue = inputElement.value;

    expect(inputValue).toBe("spider");

    const movieCard = await screen.findByTestId("movie-item-0");
    screen.debug();
    expect(movieCard).toBeInTheDocument();
  });
});

// snapshot test for the component
test("Home component snapshot", () => {
  const tree = renderer.create(<MockedHome />).toJSON();
  expect(tree).toMatchSnapshot();
}
);
