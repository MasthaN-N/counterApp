import { useReducer } from "react";

const initialValue = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;

    case "decrease":
      return state - 1;

    case "reset":
      return 0;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  function increase() {
    dispatch({ type: "increase" });
  }

  function decrease() {
    dispatch({ type: "decrease" });
  }

  function reset() {
    dispatch({ type: "reset" });
  }

  return (
    <div className="App">
      <center>
        <h1 className=" mt-5">Count : {count}</h1>

        <button className="btn btn-warning  m-1" onClick={increase}>
          Increase
        </button>

        <button className="btn btn-warning m-1" onClick={decrease}>
          decrease
        </button>

        <button className="btn btn-warning m-1" onClick={reset}>
          reset
        </button>
      </center>
    </div>
  );
}

export default App;
