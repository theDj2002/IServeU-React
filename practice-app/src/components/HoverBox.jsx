import { useState } from "react";
import { FaMousePointer } from "react-icons/fa";

function HoverBox() {
  const [bgColor, setBgColor] = useState("#2563eb");

  return (
    <div className="card">
      <h2><FaMousePointer style={{ marginRight: "10px" }} />Hover Box</h2>
      <div
        onMouseEnter={() => setBgColor("#ef4444")}
        onMouseLeave={() => setBgColor("#2563eb")}
        style={{
          width: "220px",
          height: "120px",
          background: bgColor,
          borderRadius: "18px",
          margin: "20px auto",
          transition: "0.35s ease",
          boxShadow: `0 12px 30px ${bgColor}55`,
        }}
      ></div>
      <p>Hover over the box to change color</p>
    </div>
  );
}

export default HoverBox;