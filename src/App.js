import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [total, setTotal] = useState(0);
  const [day, setDay] = useState(0);

  function handlePlus() {
    setTotal((prevTotal) => prevTotal + 1);
  }

  function handleMin() {
    setTotal((prevTotal) => prevTotal - 1);
  }

  function handlePast() {
    setDay((s) => s + total);
  }

  function handleLast() {
    setDay((s) => s - total);
  }

  return (
    <>
      <div className="line">
        <button onClick={handlePlus}>+</button>
        <p>number {total}</p>
        <button onClick={handleMin}>-</button>
      </div>

      <div className="line">
        <button onClick={handlePast}>+</button>
        <p>number {day} </p>
        <button onClick={handleLast}>-</button>
      </div>
    </>
  );
}
