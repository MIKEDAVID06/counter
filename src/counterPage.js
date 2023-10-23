import React from "react";
import { Link } from "react-router-dom";
import { useCounter } from "./useCounter";

function CounterPage() {
  const { count, increment, decrement, reset, setValue } = useCounter();

  // Define styles for the links
  const linkStyles = {
    fontSize: "18px",
    color: "yellow",
    marginRight: "20px", 
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />

      {/* Links to the 404 page and the error boundary page */}
      <div>
        <Link to="/error" style={linkStyles}>
          Go to Error Page
        </Link>
        <Link to="/nonexistent" style={linkStyles}>
          Go to 404 Page
        </Link>
      </div>
    </div>
  );
}

export default CounterPage;
