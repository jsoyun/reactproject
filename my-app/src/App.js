//cleanup
import { useState, useEffect } from "react";

function HelloTest() {
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed");
  }, []);
  return <h1>hello</h1>;
}

function App() {
  const [show, setShow] = useState(false);
  const Click = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      {show ? <HelloTest /> : null}
      <button onClick={Click}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
