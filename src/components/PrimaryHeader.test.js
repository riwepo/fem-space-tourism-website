import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import PrimaryHeader from "./PrimaryHeader";

test("render primary navigation", () => {
  render(<PrimaryHeader />, { wrapper: MemoryRouter });
});
