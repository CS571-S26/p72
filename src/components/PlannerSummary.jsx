import { Card, Row, Col, ProgressBar, Button } from "react-bootstrap";

function PlannerSummary({
  items,
  completedCount,
  totalBudget,
  completedBudget,
  remainingBudget,
  progress,
  onResetPlanner
}) {
  const cardBodyStyle = {
    padding: "24px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "14px"
  };

  return (
    <section style={{ marginBottom: "42px" }}>
      <Row className="g-4">
        <Col md={4}>
          <Card style={summaryCardStyle}>
            <Card.Body style={cardBodyStyle}>
              <div>
                <div style={summaryLabelStyle}>
                  <span style={circleIconStyle} aria-hidden="true">✓</span>
                  <span>Progress</span>
                </div>

                <p style={summaryNumberStyle}>{progress}%</p>

                <ProgressBar
                  now={progress}
                  style={{ height: "10px", borderRadius: "20px" }}
                />
              </div>

              <p style={summarySmallTextStyle}>
                {completedCount} of {items.length} items
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={summaryCardStyle}>
            <Card.Body style={cardBodyStyle}>
              <div>
                <div style={summaryLabelStyle}>
                  <span style={plainIconStyle} aria-hidden="true">$</span>
                  <span>Total Budget</span>
                </div>

                <p style={summaryNumberStyle}>${totalBudget}</p>
              </div>

              <p style={summarySmallTextStyle}>
                Estimated total cost
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={summaryCardStyle}>
            <Card.Body style={cardBodyStyle}>
              <div>
                <div style={summaryLabelStyle}>
                  <span style={plainIconStyle} aria-hidden="true">✓</span>
                  <span>Acquired</span>
                </div>

                <p style={{ ...summaryNumberStyle, color: "#3d9b6d" }}>
                  ${completedBudget}
                </p>
              </div>

              <p style={summarySmallTextStyle}>
                ${remainingBudget} remaining
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div style={{ marginTop: "18px", textAlign: "right" }}>
        <Button
          onClick={onResetPlanner}
          variant="secondary"
          style={{ borderRadius: "12px" }}
        >
          Reset Planner
        </Button>
      </div>
    </section>
  );
}

const summaryCardStyle = {
  borderRadius: "18px",
  border: "1px solid #ddd",
  height: "170px"
};

const summaryLabelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  fontSize: "16px",
  color: "#766b64",
  fontWeight: "600",
  marginBottom: "12px"
};

const summaryNumberStyle = {
  fontSize: "30px",
  fontWeight: "700",
  marginBottom: "10px"
};

const summarySmallTextStyle = {
  fontSize: "14px",
  color: "#766b64",
  margin: 0
};

const circleIconStyle = {
  width: "22px",
  height: "22px",
  borderRadius: "50%",
  border: "2px solid #766b64",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px"
};

const plainIconStyle = {
  fontSize: "22px",
  color: "#766b64",
  width: "28px",
  display: "inline-flex",
  justifyContent: "center"
};

export default PlannerSummary;