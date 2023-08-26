import { MouseEvent, useState } from "react";

const MouseClick = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  // const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
  //   console.log("Button clicked!");
  //   console.log("Mouse position:", e.clientX, e.clientY);
  // };

  return (
    <div className="fs-2">
      {mousePosition && (
        <p>
          Mouse position:{" "}
          <span className="text-danger">
            {mousePosition.x}, {mousePosition.y}
          </span>
        </p>
      )}

      <button onClick={handleClick} className="btn btn-danger btn-lg">
        Click Me
      </button>
    </div>
  );
};

export default MouseClick;
