import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ textAlign: "center", padding: "60px 20px" }}>

      <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
        Boxed &amp; Ready: Moving Planner
      </h1>

      <p style={{
        fontSize: "22px",
        color: "#666",
        maxWidth: "700px",
        margin: "0 auto 40px auto",
        lineHeight: "1.6"
      }}>
        Plan every detail of your move. Using checklists and budget tracking,
        you can organize everything you need for your move.
      </p>

      <Link
        to="/planner"
        style={{
          display: "inline-block",
          backgroundColor: "#d97745",
          color: "white",
          textDecoration: "none",
          padding: "22px 36px",
          borderRadius: "12px",
          marginBottom: "60px",
          fontSize: "22px",
          fontWeight: "500"
        }}
      >
        Start Planning
      </Link>

      <h2 style={{ fontSize: "30px", marginBottom: "22px" }}>
        Who Is This For?
      </h2>


      <ul style={{
        listStylePosition: "inside",
        maxWidth: "500px",
        margin: "0 auto",
        textAlign: "left",
        lineHeight: "1.8",
        fontSize: "18px"
      }}>
        <li>First-time renters moving into their own place</li>
        <li>College students setting up a dorm or apartment</li>
        <li>People relocating to a new city</li>
        <li>Anyone preparing for a move</li>
      </ul>

    </div>
  );
}

export default HomePage;