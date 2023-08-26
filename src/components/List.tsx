import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <div>
      {items.map((item, i) => (
        <p key={i} className="text-danger fs-2">
          {render(item)}
        </p>
      ))}
    </div>
  );
};

export default List;
