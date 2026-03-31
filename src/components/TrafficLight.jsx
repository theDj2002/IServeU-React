import { FaTrafficLight } from "react-icons/fa";

function TrafficLight({ color }) {
  let message = "";

  switch (color) {
    case "red":
      message = "Stop";
      break;
    case "yellow":
      message = "Slow Down";
      break;
    case "green":
      message = "Go";
      break;
    default:
      message = "Invalid Color";
  }

  return (
    <div className="card">
      <h2><FaTrafficLight style={{ marginRight: "10px" }} />Traffic Light</h2>

      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          background: color,
          margin: "20px auto",
          boxShadow: `0 0 25px ${color}`,
        }}
      ></div>

      <p>
        Light Color: <strong style={{ color }}>{color}</strong>
      </p>
      <p>
        Message: <strong>{message}</strong>
      </p>
    </div>
  );
}

export default TrafficLight;