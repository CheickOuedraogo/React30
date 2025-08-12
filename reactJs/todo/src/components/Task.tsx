import { useState } from "react";
import type { Itask } from "../utils/type";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Edit from "./Edit";

interface taskProps extends Itask {
  delete: (id: number) => void;
}

function Task(dataProps: taskProps) {
  const [data, setData] = useState<Itask>(dataProps);
  //const [value, setValue] = useState(dataProps.value);
  const [popUp, setPopUp] = useState<"visible" | "invisible">("invisible");
  function handleChange() {
    setData((prev) => {
      if (prev.state === "completed") return { ...prev, state: "pending" };
      return { ...prev, state: "completed" };
    });
  }
  function editHandle(newValue: string) {
    setData((prev) => ({...prev,value: newValue}))
    //setValue(newValue.value)
    setPopUp("invisible")
  }
  return (
    <div className="w-[200px]">
      <div className="flex flex-row m-3 justify-between">
        <p
          className={`${
            data.state == "completed" ? "line-through" : ""
          } mr-4 font-sans`}
          
        >
          {data.value}
        </p>
        <div className="flex flex-row">

        <input
          type="checkbox"
          name="isDone"
          checked={data.state === "completed"}
          onChange={handleChange}
          className="p-1 hover:cursor-pointer"
        />
        <button
          className="hover:cursor-pointer"
          onClick={() => dataProps.delete(dataProps.id)}
        >
          <MdDeleteOutline />
        </button>
        <button onClick={() => setPopUp("visible")}>
          <FaRegEdit />
        </button>
        </div>
      </div>
      <div>
        <Edit
          value={data.value}
          visible={popUp}
          handle={editHandle}
          id={dataProps.id}
          state={dataProps.state}
        />
      </div>
    </div>
  );
}

export default Task;
