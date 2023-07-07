// import { useState } from "react";
import { useReducer } from "react";
import doReduce from "../reducers/doReduce";


const Counter = () => {
  //   const [data, setData] = useState(0);
  const [state, dispatch] = useReducer(doReduce, { count: 0 });
  console.log(state.count);
  const increment = () => {
    // setData(data + 1);
    dispatch({ type: "inc" });
  };

  const decrement = () => {
    // setData(data - 1);
    dispatch({ type: "dec" });
  };

  const reset = () => {
    // setData(0);
    dispatch({ type: "res" });
  };

  return (
    <div>
   
      <p> {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
