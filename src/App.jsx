import { useState } from "react";
import "./App.css";

function App() {
  const [inputTask, setInputTask] = useState("");
  const [todoArr, setToDoArr] = useState([]);
  const [currOption, setCurrOption] = useState("Add");
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const addToDo = () => {
    if (currOption === "Add") {
      setToDoArr([...todoArr, { id: Date.now(), task: inputTask }]);
      setInputTask("");
    } else {
      const updatedTodos = todoArr.map((item) =>
      {
        if(item.id===selectedTaskId)
        {
          return{
            ...item,task:inputTask
          }
        }
        else
        {
          return item
        }
      }
      
      );
      setToDoArr(updatedTodos);
      setInputTask("");
      setCurrOption("Add");
      setSelectedTaskId(null);
    }
  };

  const deleteToDo = (id) => {
    setToDoArr(todoArr.filter((item) => item.id !== id));
  };

  const updateToDo = (id, task) => {
    setInputTask(task);
    setCurrOption("Update");
    setSelectedTaskId(id);
  };

  return (
    <>
      {JSON.stringify(todoArr)}
      <div>
        <input
          type="text"
          value={inputTask}
          onChange={(event) => setInputTask(event.target.value)}
        />
        <button onClick={addToDo}>{currOption}</button>
      </div>

      <div>
        {todoArr.map((item) => (
          <div key={item.id}>
            <p>{item.task}</p>
            <button onClick={() => updateToDo(item.id, item.task)}>
              Update
            </button>
            <button onClick={() => deleteToDo(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
