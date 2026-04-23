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
        "Label every box with both the room and what is inside."
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
      title: "Not Documenting the Space",
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
        <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
          Common Moving Mistakes
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#666",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}
        >
          Avoid the most common mistakes people make when moving so you can save
          time, money, and stress.
        </p>
      </div>

      {mistakes.map((mistake, index) => (
        <Card
          key={mistake.title}
          className="mb-4"
          style={{
            borderRadius: "16px",
            border: "1px solid #ddd"
          }}
        >
          <Card.Body style={{ padding: "30px" }}>
            <h2 style={{ fontSize: "30px", marginBottom: "15px" }}>
              {index + 1}. {mistake.title}
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: "#444",
                lineHeight: "1.7",
                marginBottom: "18px"
              }}
            >
              {mistake.description}
            </p>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                marginBottom: "0"
              }}
            >
              <strong>Tip:</strong> {mistake.tip}
            </p>
          </Card.Body>
        </Card>
      ))}

      <div className="text-center mt-5">
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

export default MistakesPage;