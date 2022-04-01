import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar1 from "./components/Navbar1";
import Counter from "./components/Counter";
import Slider from "./components/Slider";

function App() {
  const [parent1, setParent1] = useState("");
  const [count, setCounter] = useState();
  const onParentChange = (data) => {
    setParent1(data);
  };

  const onCounterChange = (data) => {
    setCounter(data);
  };
  return (
    <div className="App">
      <Navbar1 />
      {/* <p>Your input value is:{parent1} </p> */}
      <Login onParentChange={onParentChange} />
      {/* <Slider count={count} />
      <Counter onCounterChange={onCounterChange} /> */}
    </div>
  );
}

export default App;
