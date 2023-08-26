import { useMemo } from "react";

type fibFunc = (n: number) => number;

// (n) represents the index of the Fibonacci number that you want to calculate:
const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 7;

const Fibonacci = () => {
  //See that we are logging 'fib' all the time even if the value of 'myNum' doesn't change:
  console.log("fib");
  //Let's use the useMemoto memoize the value we return from the fib function, so it doesn't get calculated every time we re-render the whole app:
  const result = useMemo<number>(() => fib(myNum), [myNum]);
  return (
    <div className="fs-2">
      Fibonacci number: <span className="text-danger">{result}</span>
    </div>
  );
};

export default Fibonacci;
