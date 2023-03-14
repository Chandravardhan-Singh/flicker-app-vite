import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import ImageCard from "./ImageCard";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
const data = {
  id: "52744629460",
  owner: "197296781@N03",
  secret: "6c4c4c4726",
  server: "65535",
  farm: 66,
  title: ".:: ::.",
  ispublic: 1,
  isfriend: 0,
  isfamily: 0,
};

afterEach(() => {
  cleanup();
});

test("should render ImageCard", () => {
  render(<ImageCard image={data} />, {
    wrapper: BrowserRouter,
  });
  const imageElement = screen.getByTestId("todo-1");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveTextContent(data.title);
});

// snapshot
test("match snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <ImageCard image={data} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
