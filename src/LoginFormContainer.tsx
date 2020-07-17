import React, { useCallback, useState, useEffect } from "react";

import { LoginFormComponent } from "./LoginFormComponent";
import { requestLogin } from "./utils/requestLogin";

export const LoginFormContainer = () => {
  const defaultState = {
    isLoading: false,
    username: "",
    password: "",
    token: "",
    error: "",
  };

  const [isLoading, setIsLoading] = useState(defaultState.isLoading);
  const [username, setUsername] = useState(defaultState.username);
  const [password, setPassword] = useState(defaultState.password);
  const [token, setToken] = useState(defaultState.token);
  const [error, setError] = useState(defaultState.error);
  
  // const [myNumbers, setMyNumbers] = useState();
  // useEffect(() => {
  //   console.log(myNumbers);
  //   setMyNumbers([123]);
  // }, []);

  const resetForm = useCallback(() => {
    setIsLoading(defaultState.isLoading);
    setUsername(defaultState.username);
    setPassword(defaultState.password);
    setToken(defaultState.token);
    setError(defaultState.error);
  }, [
    defaultState.isLoading,
    defaultState.username,
    defaultState.password,
    defaultState.token,
    defaultState.error,
  ]);

  const handlePasswordChange = (password: string) => {
    setError(defaultState.error);
    setPassword(password);
  };

  const handleUsernameChange = (username: string) => {
    setError(defaultState.error);
    setUsername(username);
  };

  const handleSubmit = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    if (isLoading === true) {
      requestLogin(username, password).then((token = -1) => {
        resetForm();
        if (token !== -1) {
          setToken(String(token));
        } else {
          setError("Error Logging In");
        }
      });
    }
  }, [isLoading, username, password, resetForm]);

  return (
    <div>
      {token === "" ? (
        <LoginFormComponent
          isLoading={isLoading}
          username={username}
          password={password}
          error={error}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <img
          data-testid="success"
          src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif"
          alt="success gif"
        />
      )}
      <hr />
     


      <h2 className="has-text-white">Debug</h2>
      <code style={{ marginTop: "500px" }}>
        {JSON.stringify({ isLoading, username, password, token, error })}
      </code>
      <br />
      <br />
      <button className="button" onClick={resetForm}>
        Reset Demo
      </button>
    </div>
  );
};
