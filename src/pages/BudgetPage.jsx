import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BudgetPage() {
  const costSections = [
    {
      title: "Common Move-In Costs",
      description: "Expenses you may need to pay right away when signing a lease or moving in.",
      items: [
        { name: "Security deposit", range: "$500 – $2,500+" },
        { name: "First month's rent", range: "$800 – $3,000+" },
        { name: "Application / credit check fees", range: "$25 – $75" },
        { name: "Moving truck or movers", range: "$100 – $1,500+" },
        { name: "Renters insurance", range: "$10 – $25/mo" },
        { name: "Key copies / lock changes", range: "$10 – $75" }
      ]
    },
    {
      title: "Furniture & Household Setup",
      description: "Setting up a space from scratch can add up quickly.",
      items: [
        { name: "Bed frame + mattress", range: "$300 – $1,200" },
        { name: "Sofa / seating", range: "$200 – $1,000" },
        { name: "Dining table & chairs", range: "$100 – $500" },
        { name: "Kitchen starter set", range: "$80 – $250" },
        { name: "Bathroom essentials", range: "$40 – $150" },
        { name: "Cleaning supplies", range: "$30 – $80" },
        { name: "Curtains / rugs / decor", range: "$50 – $300" },
        { name: "Lighting", range: "$30 – $100" }
      ]
    },
    {
      title: "Utility & Recurring Costs",
      description: "Monthly costs to keep in mind after you move in.",
      items: [
        { name: "Electricity", range: "$60 – $160/mo" },
        { name: "Gas / heating", range: "$20 – $100/mo" },
        { name: "Water & sewer", range: "$20 – $80/mo" },
        { name: "Internet", range: "$50 – $80/mo" },
        { name: "Streaming services", range: "$10 – $50/mo" },
        { name: "Trash / recycling", range: "$10 – $30/mo" }
      ]
    },
    {
      title: "Emergency Cushion & Hidden Expenses",
      description: "Costs people often forget until the last minute.",
      items: [
        { name: "Emergency fund", range: "Varies" },
        { name: "Parking fees / permits", range: "$25 – $200/mo" },
        { name: "Pet deposits / fees", range: "$200 – $500" },
        { name: "Storage unit", range: "$50 – $250/mo" },
        { name: "Deep cleaning", range: "$100 – $300" },
        { name: "Replacement items", range: "$50 – $200" }
      ]
    }
  ];

  const savingTips = [
    "Buy secondhand furniture first.",
    "Ask family or friends for hand-me-downs.",
    "Use free boxes and packing materials when possible.",
    "Compare utility providers before signing up.",
    "Prioritize essentials before buying decor.",
    "Start a small moving fund ahead of time."
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
          Budget Tips & Costs
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#666",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}
        >
          Know what to expect financially before, during, and after your move
          so there are no surprises. Costs vary by city, apartment size, and
          lifestyle. These are planning estimates for typical renters.
        </p>
      </div>

      {costSections.map((section) => (
        <Card
          key={section.title}
          className="mb-4"
          style={{
            borderRadius: "16px",
            border: "1px solid #ddd"
          }}
        >
          <Card.Body style={{ padding: "30px" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
              {section.title}
            </h2>

            <p style={{ color: "#666", marginBottom: "25px", fontSize: "18px" }}>
              {section.description}
            </p>

            {section.items.map((item) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  padding: "12px 0",
                  borderBottom: "1px solid #eee",
                  fontSize: "18px"
                }}
              >
                <span>{item.name}</span>
                <span style={{ color: "#d97745", fontWeight: "600" }}>
                  {item.range}
                </span>
              </div>
            ))}
          </Card.Body>
        </Card>
      ))}

      <div className="text-center mt-5 mb-4">
        <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>
          Money-Saving Tips
        </h2>
        <p style={{ color: "#666", fontSize: "18px" }}>
          Practical ways to reduce your moving and setup costs.
        </p>
      </div>

      <Row className="g-4 mb-5">
        {savingTips.map((tip) => (
          <Col md={6} key={tip}>
            <Card
              style={{
                borderRadius: "16px",
                border: "1px solid #ddd",
                height: "100%"
              }}
            >
              <Card.Body style={{ padding: "25px", fontSize: "18px", lineHeight: "1.6" }}>
                {tip}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center">
        <Button
          as={Link}
          to="/planner"
          style={{
            backgroundColor: "#d97745",
            border: "none",
            borderRadius: "12px",
            padding: "14px 24px",
            fontSize: "18px"
          }}
        >
          Go to Planner
        </Button>
      </div>
    </Container>
  );
}

export default BudgetPage;