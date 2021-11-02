import React, { useState } from "react";
import { Button } from "react-bootstrap";
export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count >= 1 && count < stock) {
      setCount(count + 1);
    } else {
      alert("Alcanzaste el stock limite");
    }
  };
  const onDecreace = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert("No puede agregar 0 productos.");
    }
  };

  return (
    <div className="counter">
      <Button className="buttonCounter" onClick={onDecreace} variant="dark">
        {" "}
        -{" "}
      </Button>
      <p className="pCounter"> {count} </p>
      <Button className="buttonCounter" onClick={handleAdd} variant="dark">
        {" "}
        +{" "}
      </Button>
    </div>
  );
};
