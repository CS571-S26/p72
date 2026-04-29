import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BudgetPage() {
  const costSections = [
    {
      title: "Common Move-In Costs",
      description: "Expenses you may need to pay right away when signing a lease or moving in.",
      icon: <HomeIcon />,
      items: [
        { name: "Security deposit", range: "$500 – $2,000+" },
        { name: "First month's rent", range: "$800 – $3,000+" },
        { name: "Application / credit check fees", range: "$25 – $75" },
        { name: "Moving truck or movers", range: "$100 – $1,000+" },
        { name: "Renters insurance", range: "$10 – $25/mo" },
        { name: "Key copies / lock changes", range: "$10 – $75" }
      ]
    },
    {
      title: "Furniture & Household Setup",
      description: "Setting up a space from scratch can add up quickly.",
      icon: <DollarIcon />,
      items: [
        { name: "Bed frame + mattress", range: "$300 – $1,200" },
        { name: "Sofa / seating", range: "$200 – $1,500" },
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
      icon: <LightningIcon />,
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
      icon: <AlertIcon />,
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
    {
      title: "Buy secondhand first",
      description: "Check thrift stores, Facebook Marketplace, or friends before buying new furniture."
    },
    {
      title: "Move during off-peak times",
      description: "Mid-month and weekday moves are often cheaper than weekends or end-of-month moves."
    },
    {
      title: "Ask for hand-me-downs",
      description: "Family and friends may have extra dishes, linens, small furniture, or decor they no longer use."
    },
    {
      title: "Use free packing materials",
      description: "Ask local stores for boxes and use towels or clothing as padding instead of buying extra supplies."
    },
    {
      title: "Compare utility providers",
      description: "Compare internet, electricity, and insurance options before choosing the first provider you find."
    },
    {
      title: "Prioritize needs first",
      description: "Buy the must-haves first. Decor and extra items can wait until after you settle in."
    }
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="page-title">Budget Tips &amp; Costs</h1>

        <p className="page-subtitle">
          Know what to expect financially before, during, and after your move.
          These are general planning estimates for typical renters.
        </p>
      </div>

      <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
        {costSections.map((section) => (
          <Card key={section.title} className="mb-5" style={budgetCardStyle}>
            <Card.Body style={{ padding: 0 }}>
              <div style={cardHeaderStyle}>
                <div style={iconBoxStyle} aria-hidden="true">
                  {section.icon}
                </div>

                <div>
                  <h2 style={sectionTitleStyle}>{section.title}</h2>
                  <p style={sectionDescriptionStyle}>{section.description}</p>
                </div>
              </div>

              <div style={costListStyle}>
                {section.items.map((item) => (
                  <div key={item.name} style={costRowStyle}>
                    <span>{item.name}</span>
                    <span style={costRangeStyle}>{item.range}</span>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <section style={{ marginTop: "70px" }}>
        <div className="text-center mb-5">
          <h2 style={{ fontSize: "38px", fontWeight: "700", marginBottom: "12px" }}>
            Money-Saving Tips
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              maxWidth: "650px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}
          >
            Practical ways to reduce your moving and setup costs.
          </p>
        </div>

        <Row className="g-4" style={{ maxWidth: "1050px", margin: "0 auto" }}>
          {savingTips.map((tip) => (
            <Col md={6} key={tip.title}>
              <Card style={tipCardStyle}>
                <Card.Body style={{ display: "flex", gap: "16px", padding: "24px" }}>
                  <div style={smallIconBoxStyle} aria-hidden="true">
                    <LightbulbIcon />
                  </div>

                  <div>
                    <h3 style={tipTitleStyle}>{tip.title}</h3>
                    <p style={tipTextStyle}>{tip.description}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <div className="text-center" style={{ marginTop: "60px" }}>
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

const budgetCardStyle = {
  borderRadius: "18px",
  border: "1px solid #ddd",
  overflow: "hidden"
};

const cardHeaderStyle = {
  display: "flex",
  alignItems: "center",
  gap: "18px",
  padding: "28px 34px",
  borderBottom: "1px solid #ddd"
};

const iconBoxStyle = {
  width: "56px",
  height: "56px",
  borderRadius: "14px",
  backgroundColor: "#f8e6dd",
  color: "#d97745",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
};

const sectionTitleStyle = {
  fontSize: "30px",
  fontWeight: "700",
  margin: 0
};

const sectionDescriptionStyle = {
  color: "#766b64",
  fontSize: "17px",
  margin: 0
};

const costListStyle = {
  padding: "30px 34px"
};

const costRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  padding: "14px 0",
  fontSize: "18px"
};

const costRangeStyle = {
  color: "#d25f36",
  fontWeight: "700",
  whiteSpace: "nowrap"
};

const tipCardStyle = {
  borderRadius: "16px",
  border: "1px solid #ddd",
  height: "100%"
};

const smallIconBoxStyle = {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  backgroundColor: "#f8e6dd",
  color: "#d97745",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
};

const tipTitleStyle = {
  fontSize: "20px",
  fontWeight: "700",
  marginBottom: "8px"
};

const tipTextStyle = {
  fontSize: "17px",
  color: "#666",
  lineHeight: "1.6",
  margin: 0
};

function HomeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
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

function LightningIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M13 2L5 13h6l-1 9 8-12h-6l1-8z" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6" />
      <path d="M12 16h.01" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8 14a6 6 0 1 1 8 0c-.8.7-1 1.3-1 2H9c0-.7-.2-1.3-1-2z" />
    </svg>
  );
}

export default BudgetPage;