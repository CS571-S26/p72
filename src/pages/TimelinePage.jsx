import { Container, Card } from "react-bootstrap";

function TimelinePage() {
  const oneMonthBefore = [
    "Create a moving budget and start tracking expenses",
    "Research and book a moving company or rent a truck",
    "Start decluttering and donate or sell items you do not need",
    "Begin collecting packing supplies such as boxes, tape, and bubble wrap",
    "Notify your landlord if you are ending a lease",
    "Start a change-of-address list",
    "Research utility providers at your new address",
    "Take inventory of valuable items"
  ];

  const twoWeeksBefore = [
    "Begin packing non-essential items",
    "Label all boxes by room and contents",
    "Confirm moving company or truck reservation",
    "Set up mail forwarding",
    "Transfer or set up utilities",
    "Update your address with banks and subscriptions",
    "Arrange pet or child care for moving day",
    "Start using up perishable food items"
  ];

  const oneWeekBefore = [
    "Pack an essentials box",
    "Finish packing remaining items",
    "Disassemble large furniture if needed",
    "Clean out your current fridge and freezer",
    "Confirm the move-in time and key pickup",
    "Charge devices and save directions",
    "Take final meter readings if needed",
    "Say goodbye to neighbors"
  ];

  const movingDay = [
    "Do a final walkthrough of your old place",
    "Supervise movers or load the truck carefully",
    "Keep important documents and valuables with you",
    "Take photos of your old place",
    "Lock up and return keys if needed",
    "Check that utilities are on at the new place",
    "Direct movers to the correct rooms",
    "Unpack your essentials box first"
  ];

  const afterMoveIn = [
    "Unpack room by room",
    "Set up your bed first",
    "Deep clean before fully unpacking",
    "Test smoke detectors and replace batteries if needed",
    "Update your driver's license and registration",
    "Introduce yourself to neighbors",
    "Find the nearest grocery store and pharmacy",
    "Take photos of any pre-existing damage"
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
          Moving Timeline
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#666",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}
        >
          A practical week-by-week plan for everything you need to do before,
          during, and after your move.
        </p>
      </div>

      <Card className="mb-4" style={{ borderRadius: "16px", border: "1px solid #ddd" }}>
        <Card.Body style={{ padding: "30px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>1 Month Before Move</h2>
          <ul style={listStyle}>
            {oneMonthBefore.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4" style={{ borderRadius: "16px", border: "1px solid #ddd" }}>
        <Card.Body style={{ padding: "30px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>2 Weeks Before Move</h2>
          <ul style={listStyle}>
            {twoWeeksBefore.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4" style={{ borderRadius: "16px", border: "1px solid #ddd" }}>
        <Card.Body style={{ padding: "30px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>1 Week Before Move</h2>
          <ul style={listStyle}>
            {oneWeekBefore.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4" style={{ borderRadius: "16px", border: "1px solid #ddd" }}>
        <Card.Body style={{ padding: "30px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Moving Day</h2>
          <ul style={listStyle}>
            {movingDay.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4" style={{ borderRadius: "16px", border: "1px solid #ddd" }}>
        <Card.Body style={{ padding: "30px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>After Move-In</h2>
          <ul style={listStyle}>
            {afterMoveIn.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
}

const listStyle = {
  fontSize: "20px",
  lineHeight: "1.9",
  paddingLeft: "25px",
  margin: 0
};

const listItemStyle = {
  marginBottom: "8px"
};

export default TimelinePage;