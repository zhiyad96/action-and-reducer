import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.Counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px" }}>
      <h2>Counter Section</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
