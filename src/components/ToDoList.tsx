import React, { FC } from "react";

export interface ToDoListProps {
  name: string;
  number: number;
  onDelete: () => void;
}

export const ToDoList: FC<ToDoListProps> = ({ name, number, onDelete }) => {
  return (
    <div className="toDoList">
      <div>
        {number}. {name}
      </div>
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
};
