import React, { FC } from "react";

export interface ToDoListProps {
  name: string;
  number: number;
  onDelete?: () => void;
  onEdit: () => void;
}

export const ToDoList: FC<ToDoListProps> = ({
  name,
  number,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="toDoList">
      <div>
        {number}. {name}
      </div>
      <button onClick={onDelete}>Удалить</button>
      <button onClick={onEdit}>Редактировать</button>
    </div>
  );
};
