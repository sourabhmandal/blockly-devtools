import { createRef, useEffect } from "react";
import * as Blockly from "blockly";
import { toolboxCategories, createPlayground } from "@blockly/dev-tools";
import "./index.css";
function App() {
  const playRef = createRef();

  useEffect(() => {
    createPlayground(
      document.getElementById("playDiv"),
      (blocklyDiv, options) => {
        return Blockly.inject(blocklyDiv, options);
      }
    );
    Blockly.inject("playDiv", {
      toolbox: toolboxCategories,
    });
    return () => {};
  }, []);
  return (
    <main>
      <div ref={playRef} id="playDiv"></div>
    </main>
  );
}

export default App;
