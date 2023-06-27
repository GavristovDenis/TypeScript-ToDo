import React, { useState } from "react";
import { ToDoList } from "./components/ToDoList";

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

  function addToDo() {
    if (inputValue === "") {
    } else {
      setToDoArray((prevState) => [...prevState, { name: inputValue }]);
      setInputValue("");
    }
  }

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
            <div className="form__group field">
              <input
                className="form__field"
                placeholder="Введите задание!"
                id="name"
                onChange={(e) => setEditText(e.target.value)}
              />
              <label htmlFor="name" className="form__label">
                Введите новый текст
              </label>
            </div>
            <button onClick={() => editToDo()}>Готово!</button>
          </div>
        </div>
      ) : null}

      <div className="content">
        <div className="inputBox">
          <div className="form__group field">
            <input
              className="form__field"
              placeholder="Введите задание!"
              id="name"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <label htmlFor="name" className="form__label">
              Введите задание!
            </label>
          </div>
          <button onClick={() => addToDo()}>Добавить задание</button>
        </div>
        <div className="todos">
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
      </div>
    </div>
  );
};

export default App;
