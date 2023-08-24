import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import DotIndicators from "./DotIndicators";

const LEFT_KEY = 37;
const RIGHT_KEY = 39;

const items = [
  { id: "1", role: "role1" },
  { id: "2", role: "role2" },
  { id: "3", role: "role3" },
];

test("renders 3 buttons", () => {
  render(
    <DotIndicators items={items} activeItemIndex={0} onIndexChange={null} />
  );
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements).toHaveLength(3);
});

test("index 0 button is aria selected", () => {
  render(
    <DotIndicators items={items} activeItemIndex={0} onIndexChange={null} />
  );
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements[0]).toHaveAttribute("aria-selected", "true");
  expect(buttonElements[1]).toHaveAttribute("aria-selected", "false");
  expect(buttonElements[2]).toHaveAttribute("aria-selected", "false");
});

test("index 1 button is aria selected", () => {
  render(
    <DotIndicators items={items} activeItemIndex={1} onIndexChange={null} />
  );
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements[0]).toHaveAttribute("aria-selected", "false");
  expect(buttonElements[1]).toHaveAttribute("aria-selected", "true");
  expect(buttonElements[2]).toHaveAttribute("aria-selected", "false");
});

test("buttons have expected text", () => {
  render(
    <DotIndicators items={items} activeItemIndex={1} onIndexChange={null} />
  );
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements[0]).toHaveTextContent("role1");
  expect(buttonElements[1]).toHaveTextContent("role2");
  expect(buttonElements[2]).toHaveTextContent("role3");
});

test("buttons have sr-only class on content", () => {
  render(
    <DotIndicators items={items} activeItemIndex={1} onIndexChange={null} />
  );
  const buttonElements = screen.getAllByRole("button");
  const childNodes = buttonElements[0].childNodes;
  expect(childNodes).toHaveLength(1);
  const childNode = childNodes[0];
  expect(childNode).toBeInstanceOf(HTMLSpanElement);
  expect(childNode).toHaveClass("sr-only");
});

test("index 0 button click callback", () => {
  const clickHandler = jest.fn();
  render(
    <DotIndicators
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
    <DotIndicators
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
    <DotIndicators
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
    <DotIndicators
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
    <DotIndicators
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
    <DotIndicators
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
    <DotIndicators items={items} activeItemIndex={0} onIndexChange={null} />
  );
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements[0]).toHaveFocus();
  expect(buttonElements[1]).not.toHaveFocus();
  expect(buttonElements[2]).not.toHaveFocus();
});

test("index 1 button has focus", () => {
  render(
    <DotIndicators items={items} activeItemIndex={1} onIndexChange={null} />
  );
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements[0]).not.toHaveFocus();
  expect(buttonElements[1]).toHaveFocus();
  expect(buttonElements[2]).not.toHaveFocus();
});
