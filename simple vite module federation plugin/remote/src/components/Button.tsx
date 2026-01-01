import "./Button.css";

import { useState } from "react";

export const Button = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <h2>Remote button</h2>
      <button
        id="click-btn"
        className="shared-btn"
        onClick={() => setState((s) => s + 1)}
        style={{
          background: "red",
        }}
      >
        Click me: {state}
      </button>
    </div>
  );
};

export default Button;
