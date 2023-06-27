import React, { useState } from "react";
import { ToDoList, ToDoListProps } from "./components/ToDoList";
const App = () => {
  const [toDoArray, setToDoArray] = useState([
    {
      name: "Купить молоко",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState("");
  const [foundIndex, setFoundIndex] = useState(0);
  function deleteToDo(index: number) {
    const filteredArray = toDoArray.filter((item, i) => i !== index);
    setToDoArray(filteredArray);
  }
  function turnEditModeOn(index: number) {
    setEditMode(true);
    setFoundIndex(index);
  }

  function editToDo() {
    const newArray = [...toDoArray];
    newArray.splice(foundIndex, 1, { name: editText });
    setToDoArray(newArray);
    setEditMode(false);
    setEditText("");
  }

  return (
    <div className="App">
      {editMode ? (
        <div className="editModal">
          <div className="modalContent">
            <input onChange={(e) => setEditText(e.target.value)}></input>
            <button onClick={() => editToDo()}>Готово!</button>
          </div>
        </div>
      ) : null}

      <input onChange={(e) => setInputValue(e.target.value)}></input>
      <button
        onClick={() =>
          setToDoArray((prevState) => [...prevState, { name: inputValue }])
        }
      >
        Добавить задание
      </button>
      {toDoArray.map((toDo, index) => {
        return (
          <ToDoList
            key={index}
            name={toDo.name}
            number={index + 1}
            onDelete={() => deleteToDo(index)}
            onEdit={() => turnEditModeOn(index)}
          />
        );
      })}
    </div>
  );
};

export default App;
