import React from "react";
import { render } from "@testing-library/react";

import { LoginFormComponent } from "./../LoginFormComponent";

describe("<LoginFormComponent/>", () => {
  const testProps = {
    error: "",
    handleUsernameChange: jest.fn(),
    handlePasswordChange: jest.fn(),
    handleSubmit: jest.fn(),
    isLoading: false,
    username: "",
    password: "",
  };

  it("renders", () => {
    render(<LoginFormComponent {...testProps} />);
  });
  it("password input is hidden", () => {
    const { getByTestId } = render(<LoginFormComponent {...testProps} />);
    const passwordInput = getByTestId(
      "login-password-input"
    ) as HTMLInputElement;

    expect(passwordInput.type).toEqual("password");
  });
  it("shows loading indicator when loading", () => {
    const { getByTestId } = render(
      <LoginFormComponent {...testProps} isLoading={true} />
    );
    getByTestId("login-loading");
  });
});
