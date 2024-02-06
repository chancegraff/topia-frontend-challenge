import React from "react";
import { render } from "@testing-library/react";
import { UserList } from "./UserList";

describe("<UserList />", () => {
  it("renders correctly", () => {
    const { component } = render(<UserList />);
    expect(component).toMatchSnapshot();
  });
});
