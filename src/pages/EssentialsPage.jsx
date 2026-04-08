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
    <div style={{ padding: "60px 20px" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          marginBottom: "20px"
        }}
      >
        Apartment Essentials
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
        Everything you need to set up your new home.
      </p>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={cardStyle}>
          <h2 style={roomTitleStyle}>Kitchen</h2>
          <ul style={listStyle}>
            {kitchenItems.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={roomTitleStyle}>Bedroom</h2>
          <ul style={listStyle}>
            {bedroomItems.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={roomTitleStyle}>Bathroom</h2>
          <ul style={listStyle}>
            {bathroomItems.map((item) => (
              <li key={item} style={listItemStyle}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={roomTitleStyle}>Living Room</h2>
          <ul style={listStyle}>
            {livingRoomItems.map((item) => (
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

const roomTitleStyle = {
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

export default EssentialsPage;