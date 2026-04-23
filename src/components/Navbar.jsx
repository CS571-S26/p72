import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #ddd",
        padding: "14px 0"
      }}
    >
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "24px" }} aria-label="Site name">
          Boxed &amp; Ready
        </div>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link to="/">Home</Link>
          <Link to="/essentials">Essentials</Link>
          <Link to="/timeline">Timeline</Link>
          <Link to="/budget">Budget</Link>
          <Link to="/mistakes">Mistakes</Link>
          <Link to="/planner">Planner</Link>
        </div>

        <Link to="/planner">
          <Button
            style={{
              backgroundColor: "#d97745",
              border: "none",
              borderRadius: "12px"
            }}
          >
            Start Planning
          </Button>
        </Link>
      </Container>
    </nav>
  );
}

export default Navbar;