import { useState } from "react";
import Task from "./components/Task";
import type { Itask } from "./utils/type";

function App() {
  
  const [lastId, setLastId] = useState(0);
  const [input, setInput] = useState("");
  const [tasks, setTask] = useState<Itask[]>([]);
  const [deleteTask,setDeleteTask] = useState<Itask[]>([])
  
  function fndeleteTask(id: number) {

    const newDelete = tasks.find(task => task.id === id)
    if(newDelete)
      setDeleteTask(prev => ([...prev,newDelete]))
    const newTask = tasks.filter((task) => task.id !== id);
    setTask(newTask);
  }
    function fndeleteDefTask(id: number) {
      const newDelete = deleteTask.find((task) => task.id === id);
      if (newDelete) setDeleteTask((prev) => [...prev, newDelete]);
      const newTask = deleteTask.filter((task) => task.id !== id);
      setDeleteTask(newTask);
    }

  function addTask() {
    setTask((prev) => [
      ...prev,
      { id: lastId, value: input, state: "pending" },
    ]);
    setLastId((prev) => prev + 1);
  }
  
  return (
    <div className="flex flex-col w-screen h-screen  items-center bg-gray-200">
      <h1>Todo</h1>
      <div>
        <input
          type="text"
          className="p-2 bg-white border-0 outline-0 font-serif"
          value={input}
          onChange={(text) => setInput(text.target.value)}
        ></input>
        <button
          type="button"
          className="bg-green-500 text-white p-3 px-8 rounded-xl font-bold"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <div>
        {tasks.map((task) => (
          <Task
            id={task.id}
            value={task.value}
            state="pending"
            key={task.id}
            delete={fndeleteTask}
          />
        ))}
      </div>
      <div>
        <button>Delete History</button>
        <div>
          {deleteTask.map((task) => (
            <Task
              id={task.id}
              value={task.value}
              state="pending"
              key={task.id}
              delete={fndeleteDefTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
