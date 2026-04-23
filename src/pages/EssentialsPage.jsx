import { Container, Card } from "react-bootstrap";

function EssentialsPage() {
  const kitchenItems = [
    "Pots and pans set",
    "Cutting board",
    "Mixing bowls",
    "Dish set",
    "Dish soap and sponge",
    "Paper towels",
    "Toaster",
    "Oven mitts",
    "Knife set",
    "Can opener",
    "Measuring cups and spoons",
    "Trash can and bags"
  ];

  const bedroomItems = [
    "Bed frame",
    "Mattress",
    "Pillow set",
    "Sheets",
    "Blanket or comforter",
    "Nightstand",
    "Lamp",
    "Hangers",
    "Laundry basket",
    "Curtains or blinds"
  ];

  const bathroomItems = [
    "Towel set",
    "Shower curtain and rings",
    "Bath mat",
    "Toilet brush",
    "Plunger",
    "Soap dispenser",
    "Toothbrush holder",
    "Toiletries",
    "Toilet paper",
    "First aid kit"
  ];

  const livingRoomItems = [
    "Sofa or loveseat",
    "Coffee table",
    "Lamp",
    "Area rug",
    "Bookshelf or storage unit",
    "Curtains",
    "Wall decor",
    "Side table",
    "TV or entertainment setup",
    "Waste basket"
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
          Apartment Essentials
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
          Everything you need to set up your new home — organized by room so
          nothing gets forgotten.
        </p>
      </div>

      <Card className="mb-4" style={{ borderRadius: "16px", border: "1px solid #ddd" }}>
        <Card.Body style={{ padding: "30px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Kitchen</h2>
          <ul style={listStyle}>
            {kitchenItems.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4" style={{ borderRadius: "16px", border: "1px solid #ddd" }}>
        <Card.Body style={{ padding: "30px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Bedroom</h2>
          <ul style={listStyle}>
            {bedroomItems.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4" style={{ borderRadius: "16px", border: "1px solid #ddd" }}>
        <Card.Body style={{ padding: "30px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Bathroom</h2>
          <ul style={listStyle}>
            {bathroomItems.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>

      <Card className="mb-4" style={{ borderRadius: "16px", border: "1px solid #ddd" }}>
        <Card.Body style={{ padding: "30px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Living Room</h2>
          <ul style={listStyle}>
            {livingRoomItems.map((item) => (
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

export default EssentialsPage;