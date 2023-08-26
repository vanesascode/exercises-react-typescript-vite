import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i} className="list-unstyled ">
          {render(item)}
        </li>
      ))}
    </ul>
  );
};

export default List;
