// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render } from "@testing-library/svelte";

import Example from "./example";

test("shows proper heading when rendered", () => {
  const { getByText } = render(Example, { name: "World" });

  expect(getByText("Hello World!")).toBeInTheDocument();
});

// Note: This is as an async test as we are using `fireEvent`
test("changes button text on click", async () => {
  const { getByText } = render(Example, { name: "World" });
  const button = getByText("Button");

  // Using await when firing events is unique to the svelte testing library because
  // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
  await fireEvent.click(button);

  expect(button).toHaveTextContent("Button Clicked");
});

test("addition works properly", () => {
  const { component } = render(Example, { name: "World" });
  expect(component.addition(1, 2)).toEqual(3);
});
