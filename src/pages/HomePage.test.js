import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import HomePage from "../pages/HomePage";

test("render home page", () => {
  render(<HomePage />, { wrapper: MemoryRouter });
});
