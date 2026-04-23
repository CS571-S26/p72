import { Card, Button, Form } from "react-bootstrap";

function PlannerList({ items, onToggleComplete, onDeleteItem }) {
  return (
    <Card style={{ borderRadius: "16px" }}>
      <Card.Body>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>My Checklist</h2>

        {items.length === 0 ? (
          <p>No items match this filter.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 0",
                borderBottom: "1px solid #eee"
              }}
            >
              <div>
                <Form.Check
                  type="checkbox"
                  label={
                    <span
                      style={{
                        textDecoration: item.completed ? "line-through" : "none",
                        fontWeight: "500"
                      }}
                    >
                      {item.name}
                    </span>
                  }
                  checked={item.completed}
                  onChange={() => onToggleComplete(item.id)}
                />
                <div style={{ fontSize: "15px", color: "#666", marginTop: "5px" }}>
                  {item.room} | ${item.cost}
                </div>
              </div>

              <Button
                variant="danger"
                size="sm"
                onClick={() => onDeleteItem(item.id)}
              >
                Delete
              </Button>
            </div>
          ))
        )}
      </Card.Body>
    </Card>
  );
}

export default PlannerList;