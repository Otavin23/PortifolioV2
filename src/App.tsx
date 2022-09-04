import React from "react";
import { CreateGlobalStyles } from "./styles/globalStyles";
import Home from "./page/Home";

const App = () => {
  return (
    <>
      <CreateGlobalStyles />
      <Home />
    </>
  );
};

export default App;
