# VITE REACT TYPESCRIPT COURSE

I am following [Dave Gray](https://github.com/gitdagray)'s [course:](https://www.youtube.com/watch?v=xTVQZ46wc28&list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&index=12)

![Captura](https://github.com/vanesascode/vanesascode/assets/131259155/08776370-9a6d-456f-b1f0-ab1683214852)

### Try the results [HERE](https://exercices-react-typescript-vite-vanesascode.vercel.app/)

## 🌟VITE

To create a project:

- [x] run: `npm create vite@latest`
- [x] select 'vanilla' as the framework and select 'typescript' as the variant.
- [x] run: `npm i` to install all the dependencies

To run the project:

- [x] run: `npm run dev`

---

## 🌟DEPLOYMENT - VITE & VERCEL

Prepare your Vite application:

- [x] Run `npm run build`

In Vite, running the npm run build command triggers the build process, which generates a production-ready build of your application, the folder `dist`

If you don't have Vercel installed:

- [x] Create an account in Vercel.com
- [x] Install the Now package in the terminal, globally: `npm install now -g`
- [x] Run: `now` in the terminal, inside the root folder of the project.
- [x] The terminal will ask you your email.
- [x] Then, you'll receive an email in which you will have to verify your credentials.

Deployment steps:

- [x] Run: `now` again.
- [x] It will ask you if you want to deploy. You say Y
- [x] Asks the scope (your name)
- [x] Asks if you want to link to existing project. You say N
- [x] In which directory is your code located? If it's in the root folder just leave it like this: ./
- [x] You want to override the settings? You say N
- [x] You can now get the URL that is in the ✅ production line. It's live!

Add new changes to the live URL

- [x] Run: `now --prod` Then, changes are saved in the same URL you published before.

---

---

# Class 1

We start the course creating a component, from a type, and using the ReactElement

```
import { ReactElement } from "react";

type HeadingProps = {
  title: string;
};

const Heading = ({ title }: HeadingProps): ReactElement => {
  return <h1>{title}</h1>;
};

export default Heading;

```

---

### 🔹 ReactElement:

So, as seen before, we are importing the ReactElement type from the "react" module.

The `ReactElement type is a type in the React library that represents a React element`. React elements are the building blocks of React components. They are used to describe what should be rendered on the screen.

By importing ReactElement from the "react" module, we can use it to annotate the type of variables, function return values, or function parameters that are React elements in our code. This helps with type checking and provides better tooling support when working with React components.

However, it is not totally necessary, since Typescript already infers the type: `JSX.Element`

---

# Class 2

We saw `OLD` ways of doing things:

```

import React from "react";

export const Section: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  )

}

```

You cannot do that any more. WE NOW do this:

```

import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

export const Section = ({
  children,
  title = "My Subheading",
}: SectionProps) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
};

```

---

### 🔹 ReactNode

In React, ReactNode is a type that represents the possible types of `children` that a React component can have. It is a union type that can include various types such as:

- JSX elements
- Strings and numbers
- Arrays of JSX elements and strings
- Fragments
- Portals
- null or undefined

In other words, ReactNode is a type that encompasses all possible types of children that can be rendered within a React component. This provides `flexibility` for developers when passing content to components, as they can use any of the allowed types listed above.

---

### 🔹 useState type

```
const [count, setCount] = useState<number>(1);

```

The generic type argument <number> is provided to specify the type of the state value. However, it is not necessary cos Typescript infers the number type already. But if you want to be explicit you can use it.

---

### 🔹 use of 'prev'

```
<button onClick={() => setCount((prev) => prev + 1)}>+</button>

```

The purpose of the prev parameter is to hold the previous value of the state. In this case, prev represents the current value of the count state. By using prev in the callback function, we ensure that we are incrementing the count `based on the latest state value`.

---

### 🔹 Generics

When working with generics <T>, react can have a hard time to recognize them sometimes. So we use this:

```
<T extends {}>
```

or:

```
<T,>
```

(See List.tsx for an example of this)

---

# Class 3

### 🔹 useEffect:

This:

```
  useEffect(() => {
    console.log("mounting");
    console.log("Users: ", users);

    return () => {
      console.log("unmounting");
    };
  }, [users]);

```

is going to have the following result in the console:

mounting
Users: null
unmounting
mounting
Users: null

With react 18 there's a change that is when you use strict mode, which only applies to when you're in development mode, `it mounts the component, then it unmounts it and then it remounts it again` so you're going to see this mounting behavior twice here.

---

### 🔹 useMemo

One of the uses is to optimize the performance of a React functional component by memoizing the result of a function call. It is typically used when a function call is expensive and its result does not change frequently.

For example, we can use useMemo to memoize the result of a complex calculation or a data transformation function that is used in a functional component. This component is only processed when needed, not everytime there is a change in the react app.

This can help prevent the function from being called multiple times unnecessarily and improve the overall performance of the component.

See an example in the `DoubleNumber.tsx` component of this app.

Another important use is related to referential equality:

### 🔹 Referential equality

When referring to "referential equality," it is related to `comparing two objects or values to determine if they are the exact same instance in memory`. In other words, it checks if two variables or references point to the same memory address.

In many programming languages, including JavaScript and Python, there are two types of equality comparisons: `referential equality` and `structural equality`:

Referential equality checks if two references or variables point to the same object in memory, while structural equality checks if the values of two objects are the same, regardless of whether they are the same instance in memory.

In React, when using hooks like `useMemo` or `useCallback` , referential equality is often used to optimize re-rendering of components.

By memoizing the result of a computation or a function, React can avoid unnecessary re-execution of that computation if the dependencies have not changed, based on referential equality checks. This can help improve the performance of React components by preventing unnecessary re-renders.

---

### 🔹 Memoization

To memoize means to cache or store the result of a function call or the value of an expression so that it can be reused later without having to recompute it. This technique can improve performance by avoiding redundant calculations or expensive operations.

---

### 🔹 useCallback (vs useMemo)

The useMemo and useCallback hooks in React are similar in that they both optimize the performance of your components by memoizing values. However:

- useMemo(): This hook is used to `memoize the result of a function or a value`. It takes a dependency array as a second argument and only recomputes the memoized value when one of the dependencies in the array changes. It is useful for optimizing expensive calculations or preventing unnecessary re-renders when a value is unchanged.

- useCallback(): This hook is used to `memoize a function itself`. It returns a memoized version of the function that only changes if one of the dependencies in the dependency array changes. It is useful for optimizing performance in scenarios where you pass callbacks to child components that rely on referential equality, such as event handlers or callbacks passed as props.

```
// Expensive computation using useMemo()
  const memoizedResult = useMemo(() => {
    console.log("Performing expensive computation...");
    return count * 2;
  }, [count]);


  // Handle button click using useCallback()
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
    setCount(count + 1);
  }, [count]);

```

---

### 🔹 React.memo

```
export default React.memo(DoubleNumber);
```

Using React.memo all the time is not advisable. React.memo is a higher-order component that is used to optimize functional components by preventing unnecessary re-renders.

It should be used selectively on components that have `expensive renders` and are `not likely to change` their props frequently.

Using React.memo on all components can lead to unnecessary complexity and may not provide any performance benefits. It's best to analyze your component's rendering behavior and use React.memo judiciously where it is necessary.

---

### 🔹 Hooks should always be used directly in the body of the component function

CORRECT:

```
const Fibonacci = () => {
  const result = useMemo<number>(() => fib(myNum), [myNum]);
  return <div>Fibonacci number:{result}</div>;
};

export default Fibonacci;

```

INCORRECT:

```
const result = useMemo<number>(() => fib(myNum), [myNum]);

const Fibonacci = () => {

  return <div>Fibonacci number:{result}</div>;
};

export default Fibonacci;
```

---

### 🔹 useRef

It is a built-in hook provided by React that allows you to create a `mutable value` that persists across renders of a functional component. It returns a mutable `ref object` whose `current` property can be used to store and access a value.

When the .current property of the ref object is updated, React `does not update the component tree`.

This allows you to store values that `won't trigger re-renders`.

```
import React, { useRef } from "react";

const MyComponent = () => {
  const inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Log input value</button>
    </div>
  );
};
```

Have a look at the `RenderedWord.tsx` component for an example.

---

### 🔹 useReducer

useReducer is a built-in hook in React that allows you to manage `complex state logic` in your components. It is an alternative to using the useState hook when you need to handle state updates that depend on the previous state or involve multiple related values.

```
const [state, dispatch] = useReducer(reducer, initialState);
```

- `state`: The current state value.
- `dispatch`: A function that allows you to dispatch actions to update the state.
- `reducer`: A function that specifies how the state should be updated based on the dispatched action. It takes the current state and the action as arguments and returns the new state.
- `initialState`: The initial value of the state.

E.g.:

```

import React, { useReducer } from "react";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Component using useReducer
const Counter = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

```

---

### 🔹 Nullish coalescing operator (??)

It is a logical operator in JavaScript that provides a way to provide a default value when dealing with nullish values (null or undefined):

```
const result = value ?? defaultValue;
```

- If value is not null or undefined, the expression value ?? defaultValue evaluates to value. In other words, result will be assigned the value of value.

- If value is null or undefined, the expression value ?? defaultValue evaluates to defaultValue. In other words, result will be assigned the value of defaultValue.

👉 The nullish coalescing operator is useful when you want to provide a default value only if the original value is null or undefined.

It differs from the logical OR operator (||) because the nullish coalescing operator only considers nullish values, while the logical OR operator considers falsy values (such as empty strings, 0, false) as well.

---
