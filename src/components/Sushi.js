import React from "react";

function Sushi({ sushi, onBuySushi }) {
  function handleSushiClick(e) {
  return onBuySushi(sushi)
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {sushi.eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
