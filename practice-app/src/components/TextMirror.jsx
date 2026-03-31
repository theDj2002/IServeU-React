import { useState } from "react";
import { FaKeyboard } from "react-icons/fa";

function TextMirror() {
  const [text, setText] = useState("");

  return (
    <div className="card">
      <h2><FaKeyboard style={{ marginRight: "10px" }} />Text Mirror</h2>
      <input
        type="text"
        placeholder="Type something cool..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p style={{ marginTop: "18px" }}>
        You typed: <strong>{text || "Nothing yet..."}</strong>
      </p>
    </div>
  );
}

export default TextMirror;