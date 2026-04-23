import { Card, ProgressBar, Button } from "react-bootstrap";

function PlannerSummary({
  items,
  completedCount,
  totalBudget,
  progress,
  onResetPlanner
}) {
  return (
    <Card className="mb-4" style={{ borderRadius: "16px" }}>
      <Card.Body>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Planner Summary
        </h2>

        <p><strong>Total Items:</strong> {items.length}</p>
        <p><strong>Completed Items:</strong> {completedCount}</p>
        <p><strong>Total Estimated Budget:</strong> ${totalBudget}</p>

        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <p><strong>Progress:</strong> {progress}%</p>
          <ProgressBar now={progress} />
        </div>

        <Button
          onClick={onResetPlanner}
          variant="secondary"
          style={{ borderRadius: "12px" }}
        >
          Reset Planner
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PlannerSummary;