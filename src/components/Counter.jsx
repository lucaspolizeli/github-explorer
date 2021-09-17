import { useState } from "react";

export function Counter() {
  const [state, setState] = useState(0);

  function incrementing() {
    setState(state + 1);
  }

  return (
    <div>
      <h2>{state}</h2>

      <button type="button" onClick={incrementing}>
        Increment
      </button>
    </div>
  );
}
