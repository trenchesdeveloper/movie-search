import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { BrowserRouter } from "react-router-dom";
import Grid from "..";

describe("Home", () => {
  test("makes api call with proper string", async () => {
    render(<Grid header="header"></Grid>);
  });
});
