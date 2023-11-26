import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <>
        <h1>this is deployment test</h1>
      </>
    </BrowserRouter>
  </React.StrictMode>
);
