import React from "react";
import Buttons from "./pages/Buttons";
import Inputs from "./pages/Inputs";
import Selects from "./pages/Selects";
import Modals from "./pages/Modals";

export const App = () => {
  return (
    <>
      <Buttons />
      <Inputs />
      <Selects />
      <Modals />
    </>
  );
};

export default App;
