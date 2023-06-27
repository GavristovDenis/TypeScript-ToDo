import React, { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { createMuiTheme } from "@mui/material";
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
      <div className="toDoTextContainer">
        <div className="toDoText">
          {number}. {name}
        </div>
      </div>
      <div className="buttonSection">
        <EditIcon className="editButton" onClick={onEdit} />

        <DeleteIcon className="deleteButton" onClick={onDelete} />
      </div>
    </div>
  );
};
