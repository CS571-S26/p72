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
    <div style={{ padding: "60px 20px" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          marginBottom: "20px"
        }}
      >
        Moving Timeline
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "22px",
          color: "#666",
          maxWidth: "850px",
          margin: "0 auto 50px auto",
          lineHeight: "1.6"
        }}
      >
        A plan for everything you need to do before, during, and after your move.
      </p>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>1 Month Before Move</h2>
          <ul style={listStyle}>
            {oneMonthBefore.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>2 Weeks Before Move</h2>
          <ul style={listStyle}>
            {twoWeeksBefore.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>1 Week Before Move</h2>
          <ul style={listStyle}>
            {oneWeekBefore.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>Moving Day</h2>
          <ul style={listStyle}>
            {movingDay.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>After Move-In</h2>
          <ul style={listStyle}>
            {afterMoveIn.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "white",
  border: "1px solid #ddd",
  borderRadius: "16px",
  padding: "30px",
  marginBottom: "30px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
};

const sectionTitleStyle = {
  fontSize: "32px",
  marginBottom: "20px"
};

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