//EXAMPLE OF PASSING DOWN setState & Children:

import { ReactNode } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>; //we got this type from hovering the 'setCount' in the app.tsx file
  children: ReactNode;
};

const Counter = ({ setCount, children }: CounterProps) => {
  return (
    <>
      <h4>{children}</h4>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="btn btn-danger btn-lg mx-2 fs-4"
      >
        +
      </button>
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className="btn btn-danger btn-lg mx-2 fs-4"
      >
        -<span className="text-danger">.</span>
      </button>
    </>
  );
};

export default Counter;
