import { useReducer } from "react";

const initialState = {
  counter: 100,
};

type ACTIONS =
  | {
      type: "inc";
      payload: number;
    }
  | {
      type: "dec";
      payload: number;
    };

function CounterReducer(state: typeof initialState, action: ACTIONS) {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "dec":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      throw new Error("Something went wrong!");
  }
}

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  return (
    <>
      {state.counter}
      <button onClick={() => dispatch({ type: "inc", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "dec", payload: 10 })}>
        Decrement
      </button>
    </>
  );
}
