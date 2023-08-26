import { MouseEvent, useState } from "react";

const MouseClick = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="fs-2">
      {mousePosition && (
        <div>
          <p>Button clicked!</p>
          <p>
            Mouse position:{" "}
            <span className="text-danger">
              {mousePosition.x}, {mousePosition.y}
            </span>
          </p>
        </div>
      )}

      <button onClick={handleClick} className="btn btn-danger btn-lg">
        Click Me
      </button>
    </div>
  );
};

export default MouseClick;
