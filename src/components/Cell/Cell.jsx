export default function Cell({ value = "", onClick }) {
  return (
    <button onClick={onClick} style={{ width: "40px", height: "40px" }}>
      {value}
    </button>
  );
}
