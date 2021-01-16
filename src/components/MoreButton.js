import React from "react";

function MoreButton({ onAddMoreSushis }) {
  function handleMoreSushisButton() {
    return onAddMoreSushis()
  }
  
  
  return <button onClick={handleMoreSushisButton}>More sushi!</button>;
}

export default MoreButton;
