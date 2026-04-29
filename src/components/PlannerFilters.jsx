import { Button } from "react-bootstrap";

function PlannerFilters({
  roomFilter,
  setRoomFilter,
  statusFilter,
  setStatusFilter,
  onOpenAddModal
}) {
  const rooms = ["All", "Kitchen", "Bedroom", "Bathroom", "Living Room", "Cleaning Supplies", "Other"];
  const statuses = ["All", "Incomplete", "Completed"];

  return (
    <section style={filtersSectionStyle} aria-label="Planner filters">
      <div style={filterGroupStyle}>
        <span style={filterIconStyle} aria-hidden="true">
          <FilterIcon />
        </span>

        <div style={pillGroupStyle}>
          {rooms.map((room) => (
            <button
              key={room}
              type="button"
              onClick={() => setRoomFilter(room)}
              style={roomFilter === room ? activePillStyle : pillStyle}
            >
              {room}
            </button>
          ))}
        </div>

        <div style={dividerStyle}></div>

        <div style={pillGroupStyle}>
          {statuses.map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setStatusFilter(status)}
              style={statusFilter === status ? darkActivePillStyle : pillStyle}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <Button
        onClick={onOpenAddModal}
        style={{
          backgroundColor: "#d97745",
          border: "none",
          borderRadius: "14px",
          padding: "9px 18px",
          fontSize: "15px",
          fontWeight: "700",
          whiteSpace: "nowrap"
        }}
      >
        + Add Item
      </Button>
    </section>
  );
}

const filtersSectionStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  flexWrap: "wrap",
  marginBottom: "28px"
};

const filterGroupStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  flexWrap: "wrap"
};

const pillGroupStyle = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap"
};

const pillStyle = {
  border: "none",
  borderRadius: "999px",
  padding: "8px 14px",
  backgroundColor: "#eeeae5",
  color: "#6b5f57",
  fontWeight: "600",
  fontSize: "14px",
  cursor: "pointer"
};

const activePillStyle = {
  ...pillStyle,
  backgroundColor: "#d97745",
  color: "white"
};

const darkActivePillStyle = {
  ...pillStyle,
  backgroundColor: "#2e2723",
  color: "white"
};

const dividerStyle = {
  width: "1px",
  height: "32px",
  backgroundColor: "#d8cfc8"
};

const filterIconStyle = {
  color: "#766b64",
  display: "flex",
  alignItems: "center"
};

function FilterIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 5h18" />
      <path d="M6 12h12" />
      <path d="M10 19h4" />
    </svg>
  );
}

export default PlannerFilters;