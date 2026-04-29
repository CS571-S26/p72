import { useState, useEffect } from "react";
import { Container, Modal } from "react-bootstrap";
import PlannerForm from "../components/PlannerForm";
import PlannerList from "../components/PlannerList";
import PlannerSummary from "../components/PlannerSummary";
import PlannerFilters from "../components/PlannerFilters";
import starterItems from "../data/starterItems";

function PlannerPage() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("movingPlannerItems");

    if (savedItems) {
      return JSON.parse(savedItems);
    }

    return starterItems;
  });

  const [roomFilter, setRoomFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("movingPlannerItems", JSON.stringify(items));
  }, [items]);

  function addItem(newItem) {
    setItems([...items, newItem]);
    setShowAddModal(false);
  }

  function toggleComplete(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setItems(updatedItems);
  }

  function deleteItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  function resetPlanner() {
    setItems(starterItems);
  }

  const filteredItems = items.filter((item) => {
    const roomMatches = roomFilter === "All" || item.room === roomFilter;
    const statusMatches =
      statusFilter === "All" ||
      (statusFilter === "Completed" && item.completed) ||
      (statusFilter === "Incomplete" && !item.completed);

    return roomMatches && statusMatches;
  });

  const completedCount = items.filter((item) => item.completed).length;
  const completedBudget = items
    .filter((item) => item.completed)
    .reduce((total, item) => total + item.cost, 0);

  const totalBudget = items.reduce((total, item) => total + item.cost, 0);
  const remainingBudget = totalBudget - completedBudget;

  const progress =
    items.length === 0 ? 0 : Math.round((completedCount / items.length) * 100);

  return (
    <Container className="py-5">
      <div style={{ marginBottom: "45px" }}>
        <h1 className="page-title" style={{ marginBottom: "15px" }}>
          My Moving Plan
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#6b5f57",
            maxWidth: "850px",
            lineHeight: "1.6"
          }}
        >
          Track your essentials, stay on budget, and get settled faster.
        </p>
      </div>

      <PlannerSummary
        items={items}
        completedCount={completedCount}
        totalBudget={totalBudget}
        completedBudget={completedBudget}
        remainingBudget={remainingBudget}
        progress={progress}
        onResetPlanner={resetPlanner}
      />

      <PlannerFilters
        roomFilter={roomFilter}
        setRoomFilter={setRoomFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onOpenAddModal={() => setShowAddModal(true)}
      />

      <PlannerList
        items={filteredItems}
        onToggleComplete={toggleComplete}
        onDeleteItem={deleteItem}
      />

      <Modal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <PlannerForm
            onAddItem={addItem}
            onCancel={() => setShowAddModal(false)}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default PlannerPage;