import { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Stopwatch } from "./components/StopWatch";

function App() {
  // const [count, setCount] = useState(0)
  const count = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function increment() {
    count.current++;

    console.log(count);
  }

  function getInputValue() {
    console.log(inputRef.current?.value);
  }

  return <Stopwatch />;

  return (
    <div className="App">
      <div>
        <input ref={inputRef} />
        <button
          onClick={() => {
            inputRef.current?.focus();
            getInputValue();
          }}
        >
          Foco no input!
        </button>
      </div>

      <div>
        {count.current}
        <button onClick={increment}>Click me</button>
      </div>
    </div>
  );
}

export default App;
