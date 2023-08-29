import { ReactNode, useState } from "react";

//The ChildrenType type in your code defines a type for a prop called children that is a function accepting a num parameter of type number and returning a ReactNode:

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const CounterTwo = ({ children }: ChildrenType) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 2);
  const decrement = () => setCount((prev) => prev - 2);

  return (
    <>
      <h4>{children(count)}</h4>
      <div>
        <button onClick={increment} className="btn btn-danger btn-lg mx-2 fs-4">
          +
        </button>
        <button onClick={decrement} className="btn btn-danger btn-lg mx-2 fs-4">
          -<span className="text-danger">.</span>
        </button>
      </div>
    </>
  );
};

export default CounterTwo;
