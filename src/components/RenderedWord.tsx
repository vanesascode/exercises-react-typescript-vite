import { useRef, useState, useEffect } from "react";

const RenderedWord = () => {
  const [word, setWord] = useState("");
  //The useRef hook is used to store and update the number of renders.
  const InputRef = useRef<number>(0);

  //An useEffect hook is used to increment the value of InputRef.current every time the component is rendered.
  useEffect(() => {
    InputRef.current += 1;
    //  return () => {
    // InputRef.current = 1; // Reset the value when the component is unmounted or when the input is cleaned
    // };
  });

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-3 d-flex flex-column flex-wrap">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            className="form-control fs-4"
          />
          <div className="container">
            <p
              className="text-danger fs-2 mt-2 "
              style={{ overflowWrap: "break-word" }}
            >
              {word}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2 fs-2">
        <p className="fs-2">
          After typing, the component has rendered{" "}
          <span className="text-danger">{InputRef.current}</span> times
        </p>
      </div>
    </>
  );
};

export default RenderedWord;
