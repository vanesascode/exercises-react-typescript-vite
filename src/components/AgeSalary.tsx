import { useCallback, useState } from "react";

//types:

type Age = number;
type Salary = number;

//component:

const AgeSalary = () => {
  const [age, setAge] = useState<Age>(0);
  const [salary, setSalary] = useState<Salary>(0);

  //functions:

  const incrementAge = useCallback(() => {
    setAge((prev: number) => prev + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((prev: number) => prev + 10000);
  }, [salary]);

  //return:

  return (
    <>
      <div className="fs-2">
        Age: <span className="text-danger">{age}</span> - Salary:{" "}
        <span className="text-danger">{salary}</span>
      </div>
      <button onClick={incrementAge} className="btn btn-danger btn-lg m-2">
        Increase age
      </button>
      <button onClick={incrementSalary} className="btn btn-danger btn-lg">
        Increase salary
      </button>
    </>
  );
};

export default AgeSalary;
