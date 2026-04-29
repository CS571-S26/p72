import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function TimelinePage() {
  const phases = [
    {
      number: "1",
      title: "1 Month Before Move",
      color: "#d97745",
      tasks: [
        "Create a moving budget",
        "Book movers or reserve a truck",
        "Start decluttering",
        "Collect packing supplies",
        "Notify your landlord if needed",
        "Research utilities"
      ]
    },
    {
      number: "2",
      title: "2 Weeks Before Move",
      color: "#6aa58b",
      tasks: [
        "Pack non-essential items",
        "Label boxes by room",
        "Confirm moving plans",
        "Set up mail forwarding",
        "Schedule utilities",
        "Update important accounts"
      ]
    },
    {
      number: "3",
      title: "1 Week Before Move",
      color: "#e5a84b",
      tasks: [
        "Pack an essentials box",
        "Finish most packing",
        "Clean out the fridge",
        "Confirm key pickup",
        "Review moving day details"
      ]
    },
    {
      number: "4",
      title: "Moving Day",
      color: "#e8882e",
      tasks: [
        "Do a final walkthrough",
        "Keep documents with you",
        "Direct boxes to each room",
        "Check that utilities work",
        "Return old keys",
        "Unpack essentials first"
      ]
    },
    {
      number: "5",
      title: "After Move-In",
      color: "#4ca66a",
      tasks: [
        "Set up your bed",
        "Unpack room by room",
        "Test smoke detectors",
        "Take photos of damage",
        "Update your address"
      ]
    }
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="page-title">Moving Timeline</h1>

        <p className="page-subtitle">
          A week-by-week plan for everything you need to do before,
          during, and after your move.
        </p>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {phases.map((phase) => (
          <Card
            key={phase.title}
            className="mb-4"
            style={{
              borderRadius: "18px",
              border: "1px solid #ddd",
              borderLeft: `6px solid ${phase.color}`,
              overflow: "hidden"
            }}
          >
            <Card.Body style={{ padding: 0 }}>
              <div style={phaseHeaderStyle}>
                <div
                  style={{
                    ...numberCircleStyle,
                    backgroundColor: `${phase.color}22`,
                    color: phase.color
                  }}
                >
                  {phase.number}
                </div>

                <h2 style={phaseTitleStyle}>{phase.title}</h2>
              </div>

              <div style={taskListStyle}>
                {phase.tasks.map((task) => (
                  <div key={task} style={taskItemStyle}>
                    <span
                      style={{
                        ...checkCircleStyle,
                        borderColor: phase.color,
                        color: phase.color
                      }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>{task}</span>
                  </div>
                ))}
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

const phaseHeaderStyle = {
  display: "flex",
  alignItems: "center",
  gap: "18px",
  padding: "24px 28px",
  borderBottom: "1px solid #ddd"
};

const numberCircleStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "700"
};

const phaseTitleStyle = {
  fontSize: "28px",
  fontWeight: "700",
  margin: 0
};

const taskListStyle = {
  padding: "28px",
  display: "grid",
  gap: "18px"
};

const taskItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  fontSize: "18px",
  color: "#2b2b2b"
};

const checkCircleStyle = {
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  border: "2px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: "700",
  flexShrink: 0
};

export default TimelinePage;