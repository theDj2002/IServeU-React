function Button({ label, color }) {
  return (
    <button
      style={{
        background: color,
        color: "white",
        minWidth: "130px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
      }}
    >
      {label}
    </button>
  );
}

export default Button;