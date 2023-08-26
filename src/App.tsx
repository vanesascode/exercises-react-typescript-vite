import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";
import AddUser from "./components/AddUser";
import DoubleNumber from "./components/DoubleNumber";
import MouseClick from "./components/MouseClick";
import Fibonacci from "./components/Fibonacci";

// interface User needed for the 'user' state in the 'AddUser' component:

interface User {
  id: number;
  username: string;
}

function App() {
  // Use states => The setStates are passed down from the components:

  const [count, setCount] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([]);
  const [numero, setNumero] = useState<number>(0);

  // Side Effects => in this case, it will only happen if 'users' state changes:

  useEffect(() => {
    console.log("mounting");
    console.log("Users: ", users);

    return () => {
      console.log("unmounting");
    };
  }, [users]);

  //The app returns:

  return (
    <>
      <div className="container text-center">
        <div className=" my-5">
          <h2>Rendering a Heading: </h2>
          <Heading title={"Vite + React + TS"} />
        </div>
        <br />
        <br />

        <div className=" my-5">
          <h2>Rendering a default title with children</h2>
          <Section>This is my children data</Section>
        </div>
        <br />
        <br />
        <div className=" my-5">
          <h2>Rendering a counter with useState</h2>
          <Counter setCount={setCount}>Count is {count}</Counter>
        </div>

        <br />
        <br />
        <div className=" my-5">
          <h2>Rendering a list with generics</h2>
          <List
            items={["Vanesa", "Broto", 36]}
            render={(item: string | number) => (
              <span className="text-danger fs-3  ">{item}</span>
            )}
          />
        </div>
        <br />
        <br />

        <div className=" my-5">
          <h2>
            Rendering a list of random users with useState.
            <br /> With useEffect we console log some side effects.
          </h2>
          <ul className="list-unstyled">
            {users.map((user) => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
          <AddUser setUsers={setUsers} />
        </div>
        <br />
        <br />

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
      </div>
    </>
  );
}

export default App;
