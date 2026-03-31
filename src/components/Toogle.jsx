import { useState } from "react";
import { FaPowerOff } from "react-icons/fa";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="card">
      <h2><FaPowerOff style={{ marginRight: "10px" }} />Toggle Component</h2>
      <p>
        Status:{" "}
        <strong style={{ color: isOn ? "#22c55e" : "#ef4444" }}>
          {isOn ? "ON" : "OFF"}
        </strong>
      </p>
      <button
        onClick={() => setIsOn(!isOn)}
        style={{
          marginTop: "16px",
          background: isOn ? "#ef4444" : "#22c55e",
          color: "white",
          alignSelf: "center",
          minWidth: "130px",
          boxShadow: isOn
            ? "0 10px 25px rgba(239,68,68,0.35)"
            : "0 10px 25px rgba(34,197,94,0.35)",
        }}
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default Toggle;