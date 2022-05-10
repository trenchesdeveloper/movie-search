import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import SearchBar from "..";

const mockedSetSearchTerm = jest.fn();

// move the setSearchTerm function to the component
describe("SearchBar", () => {
  test("SearchBar component renders correctly", () => {
    render(<SearchBar setSearchTerm={mockedSetSearchTerm} />);
    const inputElement = screen.getByPlaceholderText(/Search Movie/i);

    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type into input", () => {
    render(<SearchBar setSearchTerm={mockedSetSearchTerm} />);
    const inputElement = screen.getByPlaceholderText(
      /Search Movie/i
    ) as HTMLInputElement;

    fireEvent.change(inputElement, {
      target: { value: "spider" },
    });

    expect(inputElement.value).toBe("spider");
  });

  test("SearchBar component snapshot", () => {
    const tree = renderer
      .create(<SearchBar setSearchTerm={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
