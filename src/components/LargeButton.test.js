import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import LargeButton from "./LargeButton";

test("render large button", () => {
  render(<LargeButton />, { wrapper: MemoryRouter });
});
