import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
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

  useEffect(() => {
    localStorage.setItem("movingPlannerItems", JSON.stringify(items));
  }, [items]);

  function addItem(newItem) {
    setItems([...items, newItem]);
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
  const totalBudget = items.reduce((total, item) => total + item.cost, 0);
  const progress =
    items.length === 0 ? 0 : Math.round((completedCount / items.length) * 100);

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
          Moving Planner
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#666",
            maxWidth: "750px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}
        >
          Create your checklist, track your budget, and stay organized as you
          prepare for your move.
        </p>
      </div>

      <PlannerSummary
        items={items}
        completedCount={completedCount}
        totalBudget={totalBudget}
        progress={progress}
        onResetPlanner={resetPlanner}
      />

      <PlannerFilters
        roomFilter={roomFilter}
        setRoomFilter={setRoomFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <PlannerForm onAddItem={addItem} />

      <PlannerList
        items={filteredItems}
        onToggleComplete={toggleComplete}
        onDeleteItem={deleteItem}
      />
    </Container>
  );
}

export default PlannerPage;