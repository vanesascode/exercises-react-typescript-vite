import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";
import AddUser from "./components/AddUser";
import DoubleNumber from "./components/DoubleNumber";
import MouseClick from "./components/MouseClick";
import Fibonacci from "./components/Fibonacci";
import AgeSalary from "./components/AgeSalary";
import RenderedWord from "./components/RenderedWord";
import CounterTwo from "./components/CounterTwo";

function App() {
  // Use states => setStates that are passed down from the components:

  const [count, setCount] = useState<number>(1);
  const [numero, setNumero] = useState<number>(0);

  //The app returns:

  return (
    <>
      {/* HEADING */}
      <div className="container text-center">
        <div className=" my-5">
          <h2>Rendering a Heading: </h2>
          <Heading title={"Vite + React + TS"} />
        </div>
        <br />
        <br />

        {/* SECTION */}
        <div className=" my-5">
          <h2>Rendering a default title with children</h2>
          <Section>This is my children data</Section>
        </div>
        <br />
        <br />

        {/* COUNTER */}
        <div className=" my-5">
          <h2>Rendering a counter with useState</h2>
          <Counter setCount={setCount}>
            <span className="fs-2 me-2">Count is: </span>
            <span className="text-danger fs-1">{count}</span>
          </Counter>
        </div>
        <br />
        <br />

        {/* LIST */}
        <div className=" my-5">
          <h2>Rendering a list with Generics</h2>
          <List
            items={["Vanesa", "Broto", 36]}
            //render is expecting a ReactNode, that's why we wrapp the string in a span:
            render={(item: string | number) => <span>{item}</span>}
          />
        </div>
        <br />
        <br />

        {/* ADDUSER */}
        <div className=" my-5">
          <h2>
            Rendering a list of random users with useState.
            <br /> With useEffect we console log some side effects.
          </h2>
          <AddUser />
        </div>
        <br />
        <br />

        {/* DOUBLENUMBER */}
        <div className=" my-5">
          <h2>
            Rendering a very slow component,
            <br />
            but not slowing the rest of the app thanks to React.memo
          </h2>
          <DoubleNumber setNumero={setNumero} number={numero} />
        </div>
        <br />
        <br />

        {/* FIBONACCI */}
        <div className=" my-5">
          <h2>
            Rendering a very slow value,
            <br />
            but not slowing the rest of the app thanks to useMemo
          </h2>
          <Fibonacci />
        </div>
        <br />
        <br />

        {/* AGESALARY */}
        <div className=" my-5">
          <h2>
            Rendering the result of two functions. The functions themselves are
            memoized and
            <br />
            only one is rerendered at a time when called, thanks to useCallBack
          </h2>
          <AgeSalary />
        </div>
        <br />
        <br />

        {/* MOUSECLICK */}
        <div className=" my-5">
          <h2>
            Rendering the position of the mouse when clicking the button
            <br />
            thanks to the MouseEvent
          </h2>
          <MouseClick />
        </div>
        <br />
        <br />

        {/* RENDEREDWORD */}
        <div className=" my-5">
          <h2>
            Rendering keys and displaying of the number of times the component
            <br />
            has been rendered thanks to useRef and useEffect
          </h2>
          <RenderedWord />
        </div>
        <br />
        <br />

        {/* COUNTERTWO */}
        <div className=" my-5">
          <h2>
            Rendering a count * 2, using children as a function
            <br />
            (useState too)
          </h2>
          <CounterTwo>{(num: number) => <>Current Count: {num}</>}</CounterTwo>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
