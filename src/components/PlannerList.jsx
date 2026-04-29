import { Card, Button, Form } from "react-bootstrap";

function PlannerList({ items, onToggleComplete, onDeleteItem }) {
  return (
    <Card style={listCardStyle}>
      <Card.Body style={{ padding: "28px" }}>
        <h2 style={listTitleStyle}>My Checklist</h2>

        {items.length === 0 ? (
          <p style={{ fontSize: "18px", color: "#766b64" }}>
            No items match this filter.
          </p>
        ) : (
          <div style={{ display: "grid", gap: "14px" }}>
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  ...itemRowStyle,
                  opacity: item.completed ? 0.65 : 1
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <Form.Check
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => onToggleComplete(item.id)}
                    aria-label={`Mark ${item.name} as complete`}
                    style={{ transform: "scale(1.2)" }}
                  />

                  <div>
                    <p
                      style={{
                        fontSize: "19px",
                        fontWeight: "700",
                        marginBottom: "6px",
                        textDecoration: item.completed ? "line-through" : "none"
                      }}
                    >
                      {item.name}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={roomTagStyle}>{item.room}</span>
                      <span style={costTextStyle}>${item.cost}</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDeleteItem(item.id)}
                  aria-label={`Delete ${item.name}`}
                  style={{ borderRadius: "10px" }}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

const listCardStyle = {
  borderRadius: "18px",
  border: "1px solid #ddd"
};

const listTitleStyle = {
  fontSize: "30px",
  fontWeight: "700",
  marginBottom: "24px"
};

const itemRowStyle = {
  backgroundColor: "#fff",
  border: "1px solid #eee",
  borderRadius: "16px",
  padding: "18px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px"
};

const roomTagStyle = {
  backgroundColor: "#f4e8df",
  color: "#6b5f57",
  borderRadius: "999px",
  padding: "5px 12px",
  fontSize: "14px",
  fontWeight: "600"
};

const costTextStyle = {
  color: "#d97745",
  fontWeight: "700",
  fontSize: "16px"
};

export default PlannerList;