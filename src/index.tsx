import React from "react";
import ReactDOM from "react-dom";

import { LoginFormContainer } from "./LoginFormContainer";
import "./styles.css";

export function App() {
  return (
    <div className="container has-text-centered">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 id="title" className="title has-text-white">
              MySnapBook
            </h1>
            <p className="subtitle has-text-white asdfasdfasdf">
              Give Us All Your Data!
            </p>
          </div>
        </div>
      </section>
      <LoginFormContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
