import React from "react";

interface Props<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

function Grid<T>({ data = [], renderItem }: Props<T>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map(renderItem)}
    </div>
  );
}

export default Grid;
