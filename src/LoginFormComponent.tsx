import React, { FunctionComponent } from "react";
import { Loader } from "./Loader";

interface IProps {
  error: string;
  handleUsernameChange: (newUsername: string) => void;
  handlePasswordChange: (newPassword: string) => void;
  handleSubmit: () => void;
  isLoading: boolean;
  username: string;
  password: string;
}

export const LoginFormComponent: FunctionComponent<IProps> = ({
  error = "",
  handleUsernameChange,
  handlePasswordChange,
  handleSubmit,
  isLoading = false,
  username = "",
  password = "",
}) => {

  if (isLoading) {
    return <Loader data-testid="login-loading" />;
  }

  return (
    <div className="container has-text-centered">
      <div className="App container">
        <div className="field">
          <label className="label has-text-white" htmlFor="username-input">
            Username
          </label>
          <input
            data-testid="login-username-input"
            className="input"
            onChange={(event) => {
              if (event.target.value) {
                handleUsernameChange(event.target.value);
              }
            }}
            type="text"
            id="username-input"
            placeholder="Username"
            value={username}
          />
        </div>
        <br />
        <div className="field">
          <label className="label has-text-white" htmlFor="username-password">
            Password
            <input
              data-testid="login-password-input"
              className="input"
              onChange={(event) => handlePasswordChange(event.target.value)}
              type="password"
              id="username-password"
              placeholder="Password"
              value={password}
            />
          </label>
        </div>
        {error && <p data-testid="error"> {error}</p>}

        <button
          className="button is-link is-medium"
          onClick={handleSubmit}
          data-testid="user-login"
          type="submit"
        >
          Login
        </button>
      </div>
    </div>
  );
};
