import { useState } from "react";

export default function UseStateComponent() {
  const [arrNumbers, setArrNumbers] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <>
      <div>
        <button
          onClick={() => setArrNumbers([...arrNumbers, arrNumbers.length + 1])}
        >
          Add item to array
        </button>
        {JSON.stringify(arrNumbers)}
      </div>

      <div>
        <button onClick={() => setName("Stacy")}>Set the name</button>
        {JSON.stringify(name)}
      </div>
    </>
  );
}
