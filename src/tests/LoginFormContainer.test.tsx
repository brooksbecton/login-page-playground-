jest.mock("./../utils/requestLogin");

import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { mocked } from "ts-jest/utils";
import { LoginFormContainer } from "./../LoginFormContainer";
import { requestLogin } from "./../utils/requestLogin";


const mockedRequestLogin = mocked(requestLogin);

describe("<LoginFormContainer/>", () => {
  beforeEach(() => {
    mockedRequestLogin.mockResolvedValue(12345);
  });

  it("renders", () => {
    render(<LoginFormContainer />);
  });
  it("lets a user enter a username", () => {
    const { getByTestId } = render(<LoginFormContainer />);
    const usernameInput = getByTestId(
      "login-username-input"
    ) as HTMLInputElement;
    const testUsername = "DarkKnight34";

    //Type in username box
    fireEvent.change(usernameInput, {
      target: { value: testUsername },
    });
    // See if username input value equals what we typed in
    expect(usernameInput.value).toEqual(testUsername);
  });
  it("lets a user enter a password", () => {
    const { getByTestId } = render(<LoginFormContainer />);
    const passwordInput = getByTestId(
      "login-password-input"
    ) as HTMLInputElement;
    const testPassword = "Superman6789o";

    //Type in password box
    fireEvent.change(passwordInput, {
      target: { value: testPassword },
    });

    // See if password input value equals what we typed in
    expect(passwordInput.value).toEqual(testPassword);
  });

  it("shows success if user is logged in", async () => {
    // Force success
    mockedRequestLogin.mockResolvedValueOnce(12345);

    const { getByTestId } = render(<LoginFormContainer />);

    //Click Submit
    fireEvent.click(getByTestId("user-login"));

    await waitFor(() => {
      getByTestId("success");
    });
  });
  it("shows error msg if there is one", async () => {
    // Force failure
    mockedRequestLogin.mockResolvedValueOnce(undefined);

    const { getByTestId } = render(<LoginFormContainer />);

    //Click Submit
    fireEvent.click(getByTestId("user-login"));

    await waitFor(() => getByTestId("error"));
  });
});
