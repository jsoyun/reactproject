import Button from "./Button";
import style from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((pre) => pre + 1);
  const onChange = (event) => setKeyword(event.target.value);

  //한번만
  useEffect(() => console.log("onlyOnce"), []);
  // useEffect(() => {
  //   if (keyword !== "" && keyword.length > 5) {
  //     console.log("keyword", keyword);
  //   }
  // }, [keyword]);
  useEffect(
    () => console.log("I run when counter,keyword changed"),
    [counter, keyword]
  );
  return (
    <div>
      <h1 className={style.title}>Welcome</h1>
      <input
        value={keyword}
        type="text"
        placeholder="Search here..."
        onChange={onChange}
      ></input>
      <Button text={"continue"} />
      <Button text={"stop"} />
      <h2>{counter}</h2>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
