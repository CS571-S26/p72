import { Link, NavLink } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function Navbar() {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#d97745" : "#6b5f57",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "17px"
  });

  return (
    <nav
      aria-label="Primary navigation"
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #ddd",
        padding: "16px 0"
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
        <Link
          to="/"
          aria-label="Go to homepage"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            color: "#222"
          }}
        >
          <span
            aria-hidden="true"
            style={{
              backgroundColor: "#d97745",
              color: "white",
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 10.5L12 3l9 7.5" />
              <path d="M5 10v10h14V10" />
              <path d="M9 20v-6h6v6" />
            </svg>
          </span>

          <span style={{ fontWeight: "bold", fontSize: "28px" }}>
            Boxed &amp; Ready
          </span>
        </Link>

        <div style={{ display: "flex", gap: "26px", flexWrap: "wrap" }}>
          <NavLink to="/" style={navLinkStyle}>Home</NavLink>
          <NavLink to="/essentials" style={navLinkStyle}>Essentials</NavLink>
          <NavLink to="/timeline" style={navLinkStyle}>Timeline</NavLink>
          <NavLink to="/budget" style={navLinkStyle}>Budget Tips</NavLink>
          <NavLink to="/mistakes" style={navLinkStyle}>Mistakes</NavLink>
          <NavLink to="/planner" style={navLinkStyle}>Planner</NavLink>
        </div>

        <Button
          as={Link}
          to="/planner"
          style={{
            backgroundColor: "#d97745",
            border: "none",
            borderRadius: "14px",
            padding: "12px 22px",
            fontSize: "17px",
            fontWeight: "600"
          }}
        >
          Start Planning
        </Button>
      </Container>
    </nav>
  );
}

export default Navbar;