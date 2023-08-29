import { ReactNode, useReducer, ChangeEvent } from "react";

//initial state of the states
const initState = {
  count: 0,
  text: "",
  color: true,
};

//List of actions:
const enum REDUCER_ACTION_TYPE {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  NEW_INPUT = "NEW_INPUT",
  TOGGLE_COLOR = "TOGGLE_COLOR",
}

//By using this type, you can ensure that the action objects dispatched to the reducer function adhere to a specific structure, with a type property of the defined action types and an optional payload property of type string:
type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

//actions defined:
const reducer = (state: typeof initState, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 3 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 3 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      //The text property is overridden with the value of action.payload. If action.payload is null or undefined, the nullish coalescing operator (??) is used to provide a fallback value of an empty string (""):
      return { ...state, text: action.payload ?? "" };
    case REDUCER_ACTION_TYPE.TOGGLE_COLOR:
      //The color property of the new state object is updated with the negation of the current value of state.color.
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const CounterUseReducer = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value });
  const toggle = () => dispatch({ type: REDUCER_ACTION_TYPE.TOGGLE_COLOR });

  return (
    <>
      <div
        className="container "
        style={{ color: state.color ? "#FFF" : "#800080" }}
      >
        <h4 className="display-5">{children(state.count)}</h4>
        <div className="row justify-content-center">
          <div className="mb-4">
            <button
              onClick={increment}
              className="btn btn-danger btn-lg mx-2 fs-4"
            >
              +
            </button>
            <button
              onClick={decrement}
              className="btn btn-danger btn-lg mx-2 fs-4"
            >
              -<span className="text-danger">.</span>
            </button>
            <button
              onClick={toggle}
              className="btn btn-danger btn-lg mx-2 fs-4"
            >
              Change color
            </button>
          </div>
          <div className="col-3 ">
            <input
              type="text"
              onChange={handleTextInput}
              className="form-control fs-4 mb-3"
            />
          </div>
          <h3>{state.text}</h3>
        </div>
      </div>
    </>
  );
};

export default CounterUseReducer;
