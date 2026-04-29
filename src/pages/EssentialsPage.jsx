import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function EssentialsPage() {
    const [searchParams] = useSearchParams();
    useEffect(() => {
      const section = searchParams.get("section");
      if (section) {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, [searchParams]);

  const rooms = [
    {
      id: "kitchen",
      title: "Kitchen",
      count: "12 items",
      icon: <BoxIcon />,
      iconStyle: orangeIconBoxStyle,
      items: [
        "Pots and pans",
        "Cutting board",
        "Mixing bowls",
        "Dishes set",
        "Dish soap and sponge",
        "Paper towels",
        "Toaster",
        "Oven mitts",
        "Knife set",
        "Can opener",
        "Measuring cups and spoons",
        "Trash can and bags"
      ]
    },
    {
      id: "bedroom",
      title: "Bedroom",
      count: "10 items",
      icon: <BedIcon />,
      iconStyle: greenIconBoxStyle,
      items: [
        "Bed frame",
        "Mattress",
        "Pillow set",
        "Sheets",
        "Blanket or comforter",
        "Nightstand",
        "Lamp",
        "Hangers",
        "Laundry basket",
        "Curtains"
      ]
    },
    {
      id: "bathroom",
      title: "Bathroom",
      count: "10 items",
      icon: <BathIcon />,
      iconStyle: yellowIconBoxStyle,
      items: [
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
      ]
    },
    {
      id: "living-room",
      title: "Living Room",
      count: "10 items",
      icon: <CouchIcon />,
      iconStyle: grayIconBoxStyle,
      items: [
        "Sofa",
        "Coffee table",
        "Lamp",
        "Area rug",
        "Bookshelf",
        "Throw pillows",
        "Wall decor",
        "Side table",
        "TV",
        "Candles"
      ]
    }
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="page-title">Apartment Essentials</h1>

        <p className="page-subtitle">
          Everything you need to set up your new home, organized by room.
        </p>
      </div>

      {rooms.map((room) => (
        <Card
          id={room.id}
          key={room.id}
          className="mb-5"
          style={{
            borderRadius: "18px",
            border: "1px solid #ddd",
            overflow: "hidden",
            scrollMarginTop: "110px"
          }}
        >
          <Card.Body style={{ padding: 0 }}>
            <div style={cardHeaderStyle}>
              <div style={room.iconStyle} aria-hidden="true">
                {room.icon}
              </div>

              <div>
                <h2 style={roomTitleStyle}>{room.title}</h2>
                <p style={countStyle}>{room.count}</p>
              </div>
            </div>

            <div style={itemsGridStyle}>
              {room.items.map((item) => (
                <div key={item} style={itemStyle}>
                  <span style={orangeDotStyle}></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      ))}
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

const cardHeaderStyle = {
  display: "flex",
  alignItems: "center",
  gap: "18px",
  padding: "28px 34px",
  borderBottom: "1px solid #ddd"
};

const roomTitleStyle = {
  fontSize: "30px",
  fontWeight: "700",
  margin: 0
};

const countStyle = {
  color: "#766b64",
  fontSize: "17px",
  margin: 0
};

const itemsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "26px 45px",
  padding: "34px"
};

const itemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  fontSize: "18px",
  color: "#2b2b2b"
};

const orangeDotStyle = {
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "#d97745",
  display: "inline-block",
  flexShrink: 0
};

const orangeIconBoxStyle = {
  width: "56px",
  height: "56px",
  borderRadius: "14px",
  backgroundColor: "#f8e6dd",
  color: "#d97745",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const greenIconBoxStyle = {
  ...orangeIconBoxStyle,
  backgroundColor: "#e3eee7",
  color: "#3f5b4b"
};

const yellowIconBoxStyle = {
  ...orangeIconBoxStyle,
  backgroundColor: "#f6eddc",
  color: "#8a6237"
};

const grayIconBoxStyle = {
  ...orangeIconBoxStyle,
  backgroundColor: "#eeeae5",
  color: "#6b625b"
};

function BoxIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M4 11V5" />
      <path d="M20 13v6" />
      <path d="M4 19v-6h16v6" />
      <path d="M4 11h16v2" />
      <path d="M7 8h5v3H7z" />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3z" />
      <path d="M7 12V7a3 3 0 0 1 6 0" />
      <path d="M6 20l-1 2" />
      <path d="M18 20l1 2" />
    </svg>
  );
}

function CouchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M6 12V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
      <path d="M4 12a2 2 0 0 0-2 2v4h20v-4a2 2 0 0 0-2-2" />
      <path d="M6 18v2" />
      <path d="M18 18v2" />
    </svg>
  );
}

export default EssentialsPage;