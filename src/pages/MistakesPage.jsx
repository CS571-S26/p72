import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MistakesPage() {
  const mistakes = [
    {
      title: "Underbudgeting",
      description:
        "Many first-time movers only think about rent and forget other costs like deposits, utilities, furniture, and supplies.",
      tip:
        "Make a full budget before moving and include a little extra for unexpected costs."
    },
    {
      title: "Forgetting Small Essentials",
      description:
        "People often remember big items like a bed or couch but forget things like toilet paper, a shower curtain, trash bags, and cleaning supplies.",
      tip:
        "Use a room-by-room essentials list so you do not miss the small things you need right away."
    },
    {
      title: "Poor Packing and Labeling",
      description:
        "Throwing things into random boxes without labels makes unpacking much harder and wastes time.",
      tip:
        "Label every box with the room and what is inside."
    },
    {
      title: "Waiting Too Long to Start",
      description:
        "Leaving everything until the last minute creates stress and can make moving more expensive.",
      tip:
        "Start planning at least a few weeks early and spread tasks out over time."
    },
    {
      title: "Not Measuring Furniture and Space",
      description:
        "A piece of furniture might look perfect but still not fit through the door or into the room.",
      tip:
        "Measure doorways, hallways, and room sizes before moving or buying large items."
    },
    {
      title: "Not Setting Up Utilities in Time",
      description:
        "Arriving to a new apartment without electricity, water, or internet can make move-in day much harder.",
      tip:
        "Set up your utilities before move-in day so everything is ready when you arrive."
    },
    {
      title: "Not Documenting Existing Damage",
      description:
        "If you do not take pictures of any damage before moving in, you may have trouble proving it was already there.",
      tip:
        "Take photos of every room and any damage as soon as you move in."
    },
    {
      title: "Trying to Do Everything Alone",
      description:
        "Moving can be exhausting physically and mentally, especially if one person tries to handle every step.",
      tip:
        "Ask for help from friends, family, or movers when needed."
    }
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="page-title">Common Moving Mistakes</h1>

        <p className="page-subtitle">
          Avoid the most common mistakes people make when moving so you can save
          time, money, and stress.
        </p>
      </div>

      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        {mistakes.map((mistake, index) => (
          <Card key={mistake.title} className="mb-4" style={mistakeCardStyle}>
            <Card.Body style={{ padding: "34px" }}>
              <div style={cardContentStyle}>
                <div style={mistakeIconStyle} aria-hidden="true">
                  <XIcon />
                </div>

                <div style={{ flex: 1 }}>
                  <h2 style={mistakeTitleStyle}>
                    {index + 1}. {mistake.title}
                  </h2>

                  <p style={descriptionStyle}>{mistake.description}</p>

                  <div style={tipBoxStyle}>
                    <p style={tipTextStyle}>
                      <strong style={{ color: "#3d9b6d" }}>Tip:</strong>{" "}
                      {mistake.tip}
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

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

const mistakeCardStyle = {
  borderRadius: "18px",
  border: "1px solid #ddd"
};

const cardContentStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "22px"
};

const mistakeIconStyle = {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  backgroundColor: "#fde8e8",
  color: "#d94a4a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  marginTop: "4px"
};

const mistakeTitleStyle = {
  fontSize: "28px",
  fontWeight: "700",
  marginBottom: "18px"
};

const descriptionStyle = {
  fontSize: "19px",
  color: "#5f534c",
  lineHeight: "1.7",
  marginBottom: "22px"
};

const tipBoxStyle = {
  backgroundColor: "#f4fbf7",
  border: "1px solid #bfe2d0",
  borderRadius: "14px",
  padding: "18px 20px"
};

const tipTextStyle = {
  fontSize: "18px",
  lineHeight: "1.6",
  margin: 0
};

function XIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9l6 6" />
      <path d="M15 9l-6 6" />
    </svg>
  );
}

export default MistakesPage;