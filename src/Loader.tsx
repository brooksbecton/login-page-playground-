import React, { FunctionComponent } from "react";

export const Loader: FunctionComponent = props => (
  <div className="loader-container">
    <div {...props} className="loader" />
  </div>
);
