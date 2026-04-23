import { Card, Form } from "react-bootstrap";

function PlannerFilters({
  roomFilter,
  setRoomFilter,
  statusFilter,
  setStatusFilter
}) {
  return (
    <Card className="mb-4" style={{ borderRadius: "16px" }}>
      <Card.Body>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Filters
        </h2>

        <Form.Group className="mb-3">
          <Form.Label>Filter by Room</Form.Label>
          <Form.Select
            value={roomFilter}
            onChange={(event) => setRoomFilter(event.target.value)}
          >
            <option>All</option>
            <option>Kitchen</option>
            <option>Bedroom</option>
            <option>Bathroom</option>
            <option>Living Room</option>
            <option>Cleaning Supplies</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Filter by Status</Form.Label>
          <Form.Select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option>All</option>
            <option>Completed</option>
            <option>Incomplete</option>
          </Form.Select>
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

export default PlannerFilters;