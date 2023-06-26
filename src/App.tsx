import React, { useState } from "react";
import { ToDoList, ToDoListProps } from "./components/ToDoList";
const App = () => {
  const [toDoArray, setToDoArray] = useState([
    {
      name: "Помыть деда",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  function deleteToDo(index: number) {
    const filteredArray = toDoArray.filter((item, i) => i !== index);
    setToDoArray(filteredArray);
  }

  return (
    <div className="App">
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
          />
        );
      })}
    </div>
  );
};

export default App;
