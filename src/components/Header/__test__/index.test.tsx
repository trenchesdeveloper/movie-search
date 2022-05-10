import { render, screen } from "@testing-library/react";
import Header from "..";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { BrowserRouter } from "react-router-dom";

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};
describe("Header", () => {
  test("Header component renders correctly a header", () => {
    render(<MockHeader />);
    const header = screen.getByRole("heading");

    expect(header).toBeInTheDocument();
  });

  test("Header component renders the two logo images", async () => {
    render(<MockHeader />);
    const logo = await screen.findAllByRole("img");
    expect(logo).toHaveLength(2);
  });

  test("Header component snapshot", () => {
    const tree = renderer.create(<MockHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
