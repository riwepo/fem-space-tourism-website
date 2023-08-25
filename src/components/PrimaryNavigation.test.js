import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import PrimaryNavigation from "./PrimaryNavigation";

test("render primary navigation", () => {
  render(<PrimaryNavigation isOpen={false} />, { wrapper: MemoryRouter });
});
