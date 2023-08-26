import React from "react";
// import { useMemo } from "react";

type DoubleNumberProps = {
  setNumero: React.Dispatch<React.SetStateAction<number>>;
  number: number;
};

function slowFunction(number: number): number {
  console.log("calling slowFunction");
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
}

const DoubleNumber = ({ setNumero, number }: DoubleNumberProps) => {
  const doubleNumber = slowFunction(number);
  // We could also use the useMemo hook instead of the React.memo, to memoize the value we return from the slowFunction:
  // const doubleNumber: number = useMemo(() => {
  //   return slowFunction(number);
  // }, [number]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumero(parseInt(e.target.value));
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-3">
          <input
            type="number"
            value={number}
            onChange={handleInputChange}
            className="form-control fs-4"
          />
        </div>

        <div className="mt-2 fs-2">
          {number} * 2 = <span className="text-danger">{doubleNumber}</span>
        </div>
      </div>
    </>
  );
};

// export default DoubleNumber;

export default React.memo(DoubleNumber);
