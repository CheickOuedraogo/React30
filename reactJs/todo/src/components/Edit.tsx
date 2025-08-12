import { useState } from "react";
import type { Itask } from "../utils/type";
interface editProps extends Itask {
  value: string;
  visible: "invisible" | "visible";
  handle: (value: string) => void;
}
function Edit(props: editProps) {
  const [value, setValue] = useState(props.value);
  return (
    <div
      className={`fixed top-1/2 left-1/2 ${props.visible} bg-amber-50 flex flex-col justify-center items-center h-[200px] -translate-1/2`}
    >
      <input
        value={value}
        onChange={(text) => setValue(text.target.value)}
        className="bg-white outline-0 p-3"
      ></input>
      <div>
        <button
          onClick={() => {
            props.handle(value);
          }}
          className="bg-green-500 text-white px-5 rounded-sm mx-1"
        >
          Confirmer
        </button>
        <button
          onClick={() => {
            props.handle(props.value);
          }}
          className="bg-blue-400 text-white px-5 rounded-sm"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}

export default Edit;
