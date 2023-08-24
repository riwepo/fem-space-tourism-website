import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import NumberedIndicators from "./NumberedIndicators";

const LEFT_KEY = 37;
const RIGHT_KEY = 39;

const items = [
  { id: "1", name: "name1" },
  { id: "2", name: "name2" },
  { id: "3", name: "name3" },
];

test("renders 3 buttons", () => {
  render(
    <NumberedIndicators
      items={items}
      activeItemIndex={0}
      onIndexChange={null}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements).toHaveLength(3);
});

test("index 0 button is aria selected", () => {
  render(
    <NumberedIndicators
      items={items}
      activeItemIndex={0}
      onIndexChange={null}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements[0]).toHaveAttribute("aria-selected", "true");
  expect(buttonElements[1]).toHaveAttribute("aria-selected", "false");
  expect(buttonElements[2]).toHaveAttribute("aria-selected", "false");
});

test("index 1 button is aria selected", () => {
  render(
    <NumberedIndicators
      items={items}
      activeItemIndex={1}
      onIndexChange={null}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements[0]).toHaveAttribute("aria-selected", "false");
  expect(buttonElements[1]).toHaveAttribute("aria-selected", "true");
  expect(buttonElements[2]).toHaveAttribute("aria-selected", "false");
});

test("buttons have expected text", () => {
  render(
    <NumberedIndicators
      items={items}
      activeItemIndex={1}
      onIndexChange={null}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements[0]).toHaveTextContent("name1");
  expect(buttonElements[1]).toHaveTextContent("name2");
  expect(buttonElements[2]).toHaveTextContent("name3");
});

test("index 0 button click callback", () => {
  const clickHandler = jest.fn();
  render(
    <NumberedIndicators
      items={items}
      activeItemIndex={0}
      onIndexChange={clickHandler}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  const button0 = buttonElements[0];
  fireEvent.click(button0);
  expect(clickHandler).toBeCalledWith(0);
});

test("index 1 button click callback", () => {
  const clickHandler = jest.fn();
  render(
    <NumberedIndicators
      items={items}
      activeItemIndex={0}
      onIndexChange={clickHandler}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  const button1 = buttonElements[1];
  fireEvent.click(button1);
  expect(clickHandler).toBeCalledWith(1);
});

test("index 0 button key left no callback", () => {
  const keyDownHandler = jest.fn();
  render(
    <NumberedIndicators
      items={items}
      activeItemIndex={0}
      onIndexChange={keyDownHandler}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  const button0 = buttonElements[0];
  fireEvent.keyDown(button0, { keyCode: LEFT_KEY });
  expect(keyDownHandler).not.toBeCalled();
});

test("index 0 button key right callback", () => {
  const keyDownHandler = jest.fn();
  render(
    <NumberedIndicators
      items={items}
      activeItemIndex={0}
      onIndexChange={keyDownHandler}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  const button0 = buttonElements[0];
  fireEvent.keyDown(button0, { keyCode: RIGHT_KEY });
  expect(keyDownHandler).toBeCalledWith(1);
});

test("index 2 button key right no callback", () => {
  const keyDownHandler = jest.fn();
  render(
    <NumberedIndicators
      items={items}
      activeItemIndex={2}
      onIndexChange={keyDownHandler}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  const button2 = buttonElements[2];
  fireEvent.keyDown(button2, { keyCode: RIGHT_KEY });
  expect(keyDownHandler).not.toBeCalled();
});

test("index 2 button key left callback", () => {
  const keyDownHandler = jest.fn();
  render(
    <NumberedIndicators
      items={items}
      activeItemIndex={2}
      onIndexChange={keyDownHandler}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  const button2 = buttonElements[2];
  fireEvent.keyDown(button2, { keyCode: LEFT_KEY });
  expect(keyDownHandler).toBeCalledWith(1);
});

test("index 0 button has focus", () => {
  render(
    <NumberedIndicators
      items={items}
      activeItemIndex={0}
      onIndexChange={null}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements[0]).toHaveFocus();
  expect(buttonElements[1]).not.toHaveFocus();
  expect(buttonElements[2]).not.toHaveFocus();
});

test("index 1 button has focus", () => {
  render(
    <NumberedIndicators
      items={items}
      activeItemIndex={1}
      onIndexChange={null}
    />
  );
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements[0]).not.toHaveFocus();
  expect(buttonElements[1]).toHaveFocus();
  expect(buttonElements[2]).not.toHaveFocus();
});
