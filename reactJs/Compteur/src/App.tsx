import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen w-screen flex  items-center justify-center ">
      <div className="bg-amber-50 h-[400px] flex flex-col items-center justify-center relative rounded-2xl">
        <div>
          <p className=" text-6xl absolute top-0 mt-4 left-1/2 -translate-x-1/2">{count}</p>
        </div>
        <div>
          <button
            className="bg-green-500 text-white p-2 m-3 rounded-xl"
            onClick={() => {
              setCount((prev) => prev+=1);
            }}
          >
            Increment
          </button>
          <button
            className="bg-red-500 text-white p-2 px-5 m-3 rounded-xl"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
          <button
            className="bg-blue-500 text-white p-2 m-3 rounded-xl"
            onClick={() => {
              setCount((prev) => prev-=1);
              
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
