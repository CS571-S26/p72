import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function PlannerForm({ onAddItem, onCancel }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("Kitchen");
  const [cost, setCost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "") {
      return;
    }

    const newItem = {
      id: Date.now(),
      name: name,
      room: room,
      cost: Number(cost) || 0,
      completed: false
    };

    onAddItem(newItem);

    setName("");
    setRoom("Kitchen");
    setCost("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Item Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter item name"
          autoFocus
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Room</Form.Label>
        <Form.Select
          value={room}
          onChange={(event) => setRoom(event.target.value)}
        >
          <option>Kitchen</option>
          <option>Bedroom</option>
          <option>Bathroom</option>
          <option>Living Room</option>
          <option>Cleaning Supplies</option>
          <option>Other</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Estimated Cost</Form.Label>
        <Form.Control
          type="number"
          value={cost}
          onChange={(event) => setCost(event.target.value)}
          placeholder="Enter cost"
        />
      </Form.Group>

      <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          style={{ borderRadius: "12px" }}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          style={{
            backgroundColor: "#d97745",
            border: "none",
            borderRadius: "12px"
          }}
        >
          Add Item
        </Button>
      </div>
    </Form>
  );
}

export default PlannerForm;