import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onAddMoreSushis, onBuySushi }) {

  const sushiComponents = sushis.map(sushi => {
    return <Sushi key={sushi.id} sushi={sushi} onBuySushi={onBuySushi} />
  })
  
  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onAddMoreSushis={onAddMoreSushis} />
    </div>
  );
}

export default SushiContainer;
