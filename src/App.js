import React, { useState } from "react";
import { Container } from "react-bootstrap";
import person from "./data";
import DateCounts from "./components/DateCounts";
import DatesList from "./components/DatesList";
import DateActions from "./components/DateActions";
function App() {
  const [personData, setpersonData] = useState(person);
  const onDelete = () => {
    setpersonData([]);
  };
  const onView = () => {
    setpersonData(person);
  };
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DateCounts person={personData} />
        <DatesList person={personData} />
        <DateActions deleteData={onDelete} onView={onView} />
      </Container>
    </div>
  );
}

export default App;
