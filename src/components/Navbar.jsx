import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      backgroundColor: "white",
      borderBottom: "1px solid #ddd",
      padding: "12px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>

      <div style={{ fontWeight: "bold", fontSize: "20px" }}>
        Boxed & Ready
      </div>

      <div style={{ display: "flex", gap: "40px" }}>
        <Link to="/">Home</Link>
        <Link to="/essentials">Essentials</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/budget">Budget</Link>
        <Link to="/mistakes">Mistakes</Link>
        <Link to="/planner">Planner</Link>
      </div>

      <Link to="/planner">
        <button style={{
          backgroundColor: "#d97745",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "12px",
          cursor: "pointer"
        }}>
          Start Planning
        </button>
      </Link>

    </nav>
  );
}

export default Navbar;