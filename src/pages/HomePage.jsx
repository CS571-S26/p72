import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function HomePage() {
  return (
    <Container className="py-5 text-center">
      <section style={{ paddingTop: "30px", paddingBottom: "80px" }}>
        <h1
          className="page-title"
          style={{
            maxWidth: "850px",
            margin: "0 auto 25px auto",
            lineHeight: "1.1"
          }}
        >
          Move Into Your <br />
          <span style={{ color: "#d97745" }}>New Home</span> With Confidence
        </h1>

        <p className="page-subtitle">
          Plan every detail of your move, from essentials checklists to budget
          tracking. Boxed &amp; Ready helps you stay organized before, during,
          and after your move.
        </p>

        <div style={{ marginTop: "35px" }}>
          <Link to="/planner" style={primaryButtonStyle}>
            Start Your Plan
          </Link>

          <Link to="/essentials" style={secondaryButtonStyle}>
            Browse Essentials
          </Link>
        </div>
      </section>

      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>
          Who Is This For?
        </h2>


        <Row className="g-4" style={{ maxWidth: "900px", margin: "0 auto" }}>
          {[
            "First-time renters moving into their own place",
            "College students setting up a dorm or apartment",
            "People relocating to a new city",
            "Anyone preparing for a move"
          ].map((person) => (
            <Col md={6} key={person}>
              <Card style={smallCardStyle}>
                <Card.Body style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={orangeDotStyle}></span>
                  <span>{person}</span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>
          Everything You Need to Move
        </h2>

        <Row className="g-4" style={{ maxWidth: "1050px", margin: "0 auto" }}>
          <Col md={3}>
            <Link to="/planner" onClick={() => window.scrollTo(0, 0)} style={cardLinkStyle}>
              <Card style={featureCardStyle}>
                <Card.Body>
                  <div style={iconBoxStyle}>
                    <ClipboardIcon />
                  </div>
                  <h3 style={featureTitleStyle}>Interactive Planner</h3>
                  <p style={featureTextStyle}>
                    Create a checklist, track costs, and mark items complete.
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={3}>
            <Link to="/timeline" onClick={() => window.scrollTo(0, 0)} style={cardLinkStyle}>
              <Card style={featureCardStyle}>
                <Card.Body>
                  <div style={iconBoxStyle}>
                    <CalendarIcon />
                  </div>
                  <h3 style={featureTitleStyle}>Moving Timeline</h3>
                  <p style={featureTextStyle}>
                    Have a plan to follow before and after moving day.
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={3}>
            <Link to="/budget" onClick={() => window.scrollTo(0, 0)} style={cardLinkStyle}>
              <Card style={featureCardStyle}>
                <Card.Body>
                  <div style={iconBoxStyle}>
                    <DollarIcon />
                  </div>
                  <h3 style={featureTitleStyle}>Budget Tips</h3>
                  <p style={featureTextStyle}>
                    Estimate moving costs and prepare for common expenses.
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={3}>
            <Link to="/mistakes" onClick={() => window.scrollTo(0, 0)} style={cardLinkStyle}>
              <Card style={featureCardStyle}>
                <Card.Body>
                  <div style={iconBoxStyle}>
                    <WarningIcon />
                  </div>
                  <h3 style={featureTitleStyle}>Avoid Mistakes</h3>
                  <p style={featureTextStyle}>
                    Learn what new movers often forget.
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </section>

      <section>
        <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>
          Apartment Essentials by Room
        </h2>

        <Row className="g-4" style={{ maxWidth: "1050px", margin: "0 auto" }}>
          <Col md={3}>
            <Link to="/essentials?section=kitchen" style={cardLinkStyle}>
              <Card style={roomCardStyle}>
                <Card.Body>
                  <div style={iconBoxStyle}>
                    <BoxIcon />
                  </div>
                  <h3 style={featureTitleStyle}>Kitchen</h3>
                  <p style={featureTextStyle}>Kitchen basics and cooking items</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={3}>
            <Link to="/essentials?section=bedroom" style={cardLinkStyle}>
              <Card style={roomCardStyle}>
                <Card.Body>
                  <div style={greenIconBoxStyle}>
                    <BedIcon />
                  </div>
                  <h3 style={featureTitleStyle}>Bedroom</h3>
                  <p style={featureTextStyle}>Sleep, storage, and comfort essentials</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={3}>
            <Link to="/essentials?section=bathroom" style={cardLinkStyle}>
              <Card style={roomCardStyle}>
                <Card.Body>
                  <div style={yellowIconBoxStyle}>
                    <BathIcon />
                  </div>
                  <h3 style={featureTitleStyle}>Bathroom</h3>
                  <p style={featureTextStyle}>Hygiene and cleaning basics</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={3}>
            <Link to="/essentials?section=living-room" style={cardLinkStyle}>
              <Card style={roomCardStyle}>
                <Card.Body>
                  <div style={grayIconBoxStyle}>
                    <CouchIcon />
                  </div>
                  <h3 style={featureTitleStyle}>Living Room</h3>
                  <p style={featureTextStyle}>Lighting and decor items</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </section>
      <div className="text-center mt-5">
        <Button
          as={Link}
          to="/planner"
          onClick={() => window.scrollTo(0, 0)}
          style={{
            backgroundColor: "#d97745",
            border: "none",
            borderRadius: "12px",
            padding: "14px 24px",
            fontSize: "18px",
            fontWeight: "600"
          }}
        >
          Go to Planner
        </Button>
      </div>
    </Container>
  );
}

const primaryButtonStyle = {
  display: "inline-block",
  backgroundColor: "#d97745",
  color: "white",
  textDecoration: "none",
  borderRadius: "12px",
  padding: "14px 28px",
  fontSize: "18px",
  fontWeight: "600",
  marginRight: "12px"
};

const secondaryButtonStyle = {
  display: "inline-block",
  backgroundColor: "#f4e8df",
  color: "#5f534c",
  textDecoration: "none",
  border: "1px solid #d8c9be",
  borderRadius: "12px",
  padding: "14px 28px",
  fontSize: "18px",
  fontWeight: "600"
};

const smallCardStyle = {
  borderRadius: "14px",
  border: "1px solid #ddd",
  textAlign: "left",
  fontSize: "17px",
  height: "100%"
};

const orangeDotStyle = {
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "#d97745",
  display: "inline-block",
  flexShrink: 0
};

const cardLinkStyle = {
  textDecoration: "none",
  color: "inherit"
};

const featureCardStyle = {
  borderRadius: "18px",
  border: "1px solid #ddd",
  textAlign: "left",
  height: "280px",
  padding: "18px"
};

const roomCardStyle = {
  borderRadius: "18px",
  border: "1px solid #ddd",
  textAlign: "left",
  height: "250px",
  padding: "18px"
};

const iconBoxStyle = {
  width: "44px",
  height: "44px",
  borderRadius: "14px",
  backgroundColor: "#f8e6dd",
  color: "#d97745",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "22px"
};

const greenIconBoxStyle = {
  ...iconBoxStyle,
  backgroundColor: "#e3eee7",
  color: "#3f5b4b"
};

const yellowIconBoxStyle = {
  ...iconBoxStyle,
  backgroundColor: "#f6eddc",
  color: "#8a6237"
};

const grayIconBoxStyle = {
  ...iconBoxStyle,
  backgroundColor: "#eeeae5",
  color: "#6b625b"
};

const featureTitleStyle = {
  fontSize: "20px",
  marginBottom: "12px",
  fontWeight: "700"
};

const featureTextStyle = {
  fontSize: "16px",
  color: "#666",
  lineHeight: "1.6",
  marginBottom: 0
};

function ClipboardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M9 5h6" />
      <path d="M9 3h6v4H9z" />
      <path d="M6 5H5a2 2 0 0 0-2 2v13h18V7a2 2 0 0 0-2-2h-1" />
      <path d="M8 13l2 2 5-5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M12 3l10 18H2L12 3z" />
      <path d="M12 9v9" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M4 11V5" />
      <path d="M20 13v6" />
      <path d="M4 19v-6h16v6" />
      <path d="M4 11h16v2" />
      <path d="M7 8h5v3H7z" />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3z" />
      <path d="M7 12V7a3 3 0 0 1 6 0" />
      <path d="M6 20l-1 2" />
      <path d="M18 20l1 2" />
    </svg>
  );
}

function CouchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M6 12V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
      <path d="M4 12a2 2 0 0 0-2 2v4h20v-4a2 2 0 0 0-2-2" />
      <path d="M6 18v2" />
      <path d="M18 18v2" />
    </svg>
  );
}

export default HomePage;