import React from "react";
import { render } from "react-dom";
import GenerateLettersByDragCanvas from "@wafuwafu13/react-rich-text-test-test";

const App = () => (
  <>
    <GenerateLettersByDragCanvas
      letters={"welcom to my portfolio!"}
      height={500}
      width={500}
      font={"Georgia"}
      fontSizeMin={30}
      backgroundColor={"green"}
    />
  </>
);

render(<App />, document.getElementById("root"));
